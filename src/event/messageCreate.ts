import { Client,  Message } from "discord.js";

export default (client: Client): void => {
    client.on("messageCreate", async (message: Message) => {
        if (message.author.id === client.user?.id)
            if (Math.random() < 0.98) return;

        if (message.content.toLowerCase().includes("rupert")) {
            message.reply({ content: "you called?" });
            return;
        }

    });
};