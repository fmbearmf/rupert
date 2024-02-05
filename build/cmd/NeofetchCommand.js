"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecCommand = void 0;
const discord_js_1 = require("discord.js");
const child_process_1 = require("child_process");
exports.ExecCommand = {
    name: "exec",
    description: "executes command on Rupert's server",
    options: [
        {
            name: "command",
            description: "command to execute",
            type: discord_js_1.ApplicationCommandOptionType.String,
            required: true,
        },
    ],
    type: discord_js_1.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        interaction.deferReply();
        const commandObj = interaction.options.get("command", true);
        const command = commandObj.value?.toString();
        if (!command)
            return;
        (0, child_process_1.exec)(command, (err, stdout) => {
            interaction.editReply(stdout.toString());
        });
    }
};
