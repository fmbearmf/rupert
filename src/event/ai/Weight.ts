import { readFile, writeFile } from "fs/promises";
import path from "path";

export type WeightedList = {
    values: string[];
    weights: number[];
    decay?: number;
};

export interface WeightState {
    adjWeights: number[];
    nounWeights: number[];
    verbWeights: number[];
    lastUpdated?: string;
}

export const STATE_FILE = path.join(process.cwd(), "state.json");
export const DEFAULT_DECAY = 0.8;

export async function loadState(): Promise<WeightState | null> {
    try {
        const json = await readFile(STATE_FILE, "utf-8").then((data) => JSON.parse(data)) as WeightState;

        if (json.adjWeights && json.nounWeights && json.verbWeights) {
            return {
                adjWeights: json.adjWeights,
                nounWeights: json.nounWeights,
                verbWeights: json.verbWeights,
                lastUpdated: new Date().toISOString()
            };
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error!.code === "ENOENT") {
            return null;
        }

        console.error("Error loading state: ", error);
    }

    return null;
}

export async function saveState(state: WeightState): Promise<void> {
    try {
        writeFile(
            STATE_FILE,
            JSON.stringify({
                ...state,
                lastUpdated: new Date().toISOString()
            } as WeightState, null, 2),
            "utf-8"
        );
    } catch (error) {
        console.error("error writing state: ", error);
    }
}

export async function getWeightedIndex(list: WeightedList): Promise<number> {
    return new Promise((resolve) => {
        setImmediate(() => {
            const total = list.weights.reduce((sum, weight) => sum + weight, 0);
            if (total <= 0) {
                resolve(Math.floor(Math.random() * list.values.length));
                return;
            }

            const random = Math.random() * total;
            let accml = 0;

            for (let i = 0; i < list.weights.length; i++) {
                accml += list.weights[i];
                if (random <= accml) {
                    if (list.decay) {
                        //list.weights[i] *= list.decay;
                    }
                    resolve(i);
                    return;
                }
            }
            resolve(list.weights.length - 1);
        });
    });
}

export async function initWeights(source: string[], existing: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setImmediate(() => {
            if (existing.length === source.length) { resolve([...existing]); }
            
            else resolve(source.map((_, i) => 1 + Math.log(source.length - i)));
        });
    });
}

