import { Client,  Message } from "discord.js";
import rupert from "./rupert";

export default (client: Client): void => {
    client.on("messageCreate", async (message: Message) => {
        if (message.author.id === client.user?.id)
            if (Math.random() < 0.98) return;

        if (Math.random() >= 0.99) {
            message.reply({ content: "ok thats crazy" });
            return;
        }

        rupert(message);
    });
};