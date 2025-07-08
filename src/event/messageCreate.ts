import { Client,  Message } from "discord.js";
import RandomStatement from "./ai/RandomStatement";

export const bannedRupertUsers = [
    "470010465486110730",
    "691090730872995850",
    "307677300730757120"
];

export default (client: Client): void => {
    client.on("messageCreate", async (message: Message) => {
        try {
            if (bannedRupertUsers.includes(message.author.id)) {
                return;
            }

            if (message.author.id === client.user?.id)
                if (Math.random() < 0.98) return;

            if (message.content.toLowerCase().includes("stupid") 
            && message.content.toLowerCase().includes("rupert")) {
                message.reply({ content: "but then my name would be stupert" });
                return;
            }

            if (message.content.includes(client.user!.id)) {
                message.reply({ content: "gluepert" });
                return;
            }

            if (message.content.toLowerCase().includes("rupert")) {
                if (message.content.toLowerCase().includes("thank")) {
                    message.reply({ content: "y'oure welcomepert" });
                } else
                    message.reply({ content: "bluepert." });
                return;
            }

            if (message.content.toLowerCase().includes("ourpert")) {
                if (Math.random() >= 0.65) {
                    message.reply("greenpert");
                    return;
                }
            }

            if (message.author.id === "674819147963564054") {
                if (Math.random() >= 0.989) {
                    message.reply("yeah okay, 'glistermelon'. stinky nerd.. more like glisternerd");
                    return;
                }
            }

            if ((Math.random() >= 0.70) && (message.content.toLowerCase().includes("mpreg"))) {
                if (Math.random() >= 0.70) {
                    message.reply("📉📉📉");
                } else
                    message.reply("begone! 1 thousand years curse upon your village!!");
            }

            if (Math.random() >= 0.973) {
                RandomStatement().then((stmt) => {
                    message.reply(`${stmt}`);
                });
                return;
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            console.error(e);
        }
    });
};
