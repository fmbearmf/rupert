"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YapCommand = void 0;
const discord_js_1 = require("discord.js");
const RandomStatement_1 = __importDefault(require("../event/ai/RandomStatement"));
exports.YapCommand = {
    name: "rupert",
    description: "does a thing me thinks",
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        interaction.deferReply();
        interaction.editReply({ content: await (0, RandomStatement_1.default)() });
    }
};
