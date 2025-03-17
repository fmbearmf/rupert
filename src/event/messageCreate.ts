import { Client,  Message } from "discord.js";
import RandomStatement from "./ai/RandomStatement";

export default (client: Client): void => {
    client.on("messageCreate", async (message: Message) => {
        if (message.author.id === client.user?.id)
            if (Math.random() < 0.98) return;

        if (message.content.toLowerCase().includes("rupert")) {
            message.reply({ content: "bluepert." });
            return;
        }

        if (message.author.id === "674819147963564054") {
            if (Math.random() >= 0.94) {
                message.reply("yeah okay, 'glistermelon'. stinky ahh");
                return;
            }
        }

        if (message.author.id === "470010465486110730") { // pixel's ID
            if (Math.random() >= 0.91) {
                RandomStatement().then((m0) => {
                    RandomStatement().then((m1) => {
                        RandomStatement().then((m2) => {
                            message.reply(`${m0} ${m1} ${m2}`);
                        });
                    });
                });
            }
        }

        if ((Math.random() >= 0.79) && (message.content.toLowerCase().includes("mpreg"))) {
            message.reply("begone! 1 thousand years curse upon your village!!");
        }

        if (Math.random() >= 0.978) {
            RandomStatement().then((stmt) => {
                message.reply(`${stmt}`);
            });
            return;
        }
    });
};