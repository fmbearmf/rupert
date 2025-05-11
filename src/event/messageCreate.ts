import { Client,  Message } from "discord.js";
import RandomStatement from "./ai/RandomStatement";

export default (client: Client): void => {
    client.on("messageCreate", async (message: Message) => {
        try {
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
                if (Math.random() >= 0.94) {
                    message.reply("yeah okay, 'glistermelon'. stinky ahh");
                    return;
                }
            }

            if (message.author.id === "470010465486110730") { // pixel's ID
                if (Math.random() >= 0.984) {
                    RandomStatement().then((m0) => {
                        RandomStatement().then((m1) => {
                            RandomStatement().then((m2) => {
                                message.reply(`${m0} ${m1} ${m2}`);
                            });
                        });
                    });
                }
            }

            if ((Math.random() >= 0.70) && (message.content.toLowerCase().includes("mpreg"))) {
                if (Math.random() >= 0.70) {
                    message.reply("📉📉📉");
                } else
                    message.reply("begone! 1 thousand years curse upon your village!!");
            }

            if (Math.random() >= 0.943) {
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