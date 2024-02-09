"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RupertCommand = void 0;
const discord_js_1 = require("discord.js");
const eep_1 = require("../eep");
exports.RupertCommand = {
    name: "rupert",
    description: "does a thing me thinks",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        await interaction.deferReply();
        await (0, eep_1.eep)(5000).then(() => {
            interaction.editReply({
                content: "rupert"
            });
        });
    }
};
