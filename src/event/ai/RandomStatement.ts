import Adjectives from "./Adjectives";
import Nouns from "./Nouns";
import Verbs from "./Verbs";

export default async (): Promise<string> => {
    const adjectives = Adjectives();
    const nouns = Nouns();
    const verbs = Verbs();

    const nounIndex: number = Math.floor(Math.random() * nouns.length);
    const adjIndex: number = Math.floor(Math.random() * adjectives.length);
    const verbIndex: number = Math.floor(Math.random() * verbs.length);

    const stmt = `${adjectives[adjIndex]} ${nouns[nounIndex]} ${verbs[verbIndex]}...`;

    return stmt;
};