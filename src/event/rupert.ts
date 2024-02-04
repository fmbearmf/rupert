import { Message } from "discord.js";
import rupert from "./rupert/rupert";
import broke from "./rupert/rupert3";
import george from "./rupert/rupert2";
import blueCat from "./rupert/rupert4";

export default async (message: Message) => {

    const msg: string = message.content.toLowerCase();

    if (msg.includes("rupert"))
        rupert(message);

    if (msg.includes("broke"))
        broke(message);

    if (msg.includes("george"))
        george(message);

    if (msg.includes("blue"))
        blueCat(message);


};