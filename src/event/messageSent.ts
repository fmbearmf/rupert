import { Client, Message } from "discord.js";

export default (client: Client): void => {
    client.on("messageCreate", async (message: Message) => {
        if (message.author.id === client.user?.id) return;

        const msg = message.content.toLowerCase();

        switch(true) {
        case msg.includes("rupert"):
            message.reply({ content: "it's me.<:ruper:1203257560547991563> (rupert)" });
            return;
        case msg.includes("broke"):
            message.reply({ content: "<:junya:1178867087805009950>" });
            return;
        case msg.includes("george"):
            message.reply({ content: "<:jorg:1203254867276333077>" });
            return;
        case msg.includes("blue"):
            message.reply({ content: "<:blue_cat:1203255126727335956>" });
            return;
        default:
            return;
        }
    });
};