import Adjectives from "./Adjectives";
import Nouns from "./Nouns";

export default async (): Promise<string> => {
    const adjectives = Adjectives();
    const nouns = Nouns();

    const nounIndex: number = Math.floor(Math.random() * nouns.length);
    const adjIndex: number = Math.floor(Math.random() * adjectives.length);

    const stmt = `${adjectives[adjIndex]} ${nouns[nounIndex]}...`;

    return stmt;
};