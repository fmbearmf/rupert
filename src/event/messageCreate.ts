import { Client,  Message } from "discord.js";
import RandomStatement from "./ai/RandomStatement";

export default (client: Client): void => {
    client.on("messageCreate", async (message: Message) => {
        if (message.author.id === client.user?.id)
            if (Math.random() < 0.98) return;

        if (message.content.toLowerCase().includes("rupert")) {
            message.reply({ content: "you called?" });
            return;
        }

        if (Math.random() > 0.98) {
            RandomStatement().then((stmt) => {
                message.reply(`${stmt}`);
            });
            return;
        }
    });
};