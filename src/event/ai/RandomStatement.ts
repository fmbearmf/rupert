import Adjectives from "./Adjectives";
import Nouns from "./Nouns";
import Verbs from "./Verbs";
import { DEFAULT_DECAY, getWeightedIndex, initWeights, loadState, saveState, WeightState } from "./Weight";

const adjectives = Adjectives();
const nouns = Nouns();
const verbs = Verbs();

let state: WeightState = {
    adjWeights: [],
    nounWeights: [],
    verbWeights: []
};

if (state.adjWeights.length === 0) loadState().then((newState) => 
{ 
    if (newState && state) state = newState; 
});

Promise.all(
    [
        initWeights(adjectives, state.adjWeights),
        initWeights(nouns, state.nounWeights),
        initWeights(verbs, state.verbWeights),
    ]).then(([adj, noun, verb]) => {
    state.adjWeights = adj;
    state.nounWeights = noun;
    state.verbWeights = verb;
});


export default async (): Promise<string> => {

    const nounIndex = getWeightedIndex({
        values: nouns,
        weights: state.nounWeights,
        decay: DEFAULT_DECAY
    });

    const adjIndex = getWeightedIndex({
        values: adjectives,
        weights: state.adjWeights,
        decay: DEFAULT_DECAY * 0.9
    });
    
    const verbIndex = getWeightedIndex({
        values: verbs,
        weights: state.verbWeights,
        decay: DEFAULT_DECAY * 0.7
    });

    const verbTotal = state.verbWeights.reduce((a, b) => a + b, 0);

    console.log("prob: ", 9.4 * (state.verbWeights[await verbIndex] / verbTotal));

    const verbProbable = verbTotal > 0
        ? 9.4 * (state.verbWeights[await verbIndex] / verbTotal)
        : 0.9;

    console.log("final prob: ", verbProbable);
    const includeVerb = Math.random() < verbProbable;

    //saveState(state);

    const stmt = `${includeVerb ? "the ": ""}${adjectives[await adjIndex]} ${nouns[await nounIndex]} ${includeVerb ? verbs[await verbIndex] : ""}...`;
    console.debug(`stmt: ${stmt}`);

    return stmt;
};