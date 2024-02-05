import Adjectives from "./Adjectives";
import Nouns from "./Nouns";

export default async (): Promise<string> => {
    const adjectives = Adjectives();
    const nouns = Nouns();

    const randomIndex: number = Math.floor(Math.random() * adjectives.length);

    const stmt = `${adjectives[randomIndex]} ${nouns[randomIndex]}...`;

    return stmt;
};