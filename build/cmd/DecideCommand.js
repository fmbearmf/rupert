"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecideCommand = void 0;
const discord_js_1 = require("discord.js");
const eep_1 = require("../eep");
exports.DecideCommand = {
    name: "decide",
    description: "yes or no",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        interaction.deferReply();
        let decision = true;
        if (Math.random() <= 0.5)
            decision = false;
        await (0, eep_1.eep)(5000).then(() => {
            interaction.editReply({
                content: `${decision ? "yes" : "no"}`
            });
        });
    }
};
