"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmds_1 = require("./cmd/cmds");
exports.default = (client) => {
    client.on("interactionCreate", async (interaction) => {
        try {
            if (interaction.isCommand() || interaction.isContextMenuCommand()) {
                await handleSlash(client, interaction);
            }
        }
        catch (error) {
            console.error(error);
            return;
        }
    });
};
const handleSlash = async (client, interaction) => {
    const slashCmd = cmds_1.cmds.find(cmd => cmd.name === interaction.commandName);
    if (!slashCmd) {
        await interaction.reply({ content: "uhhh something screwed up. tell bear." });
        console.error(`ERROR: ${interaction.commandName} doesn't exist.`);
        console.error(`ERROR: Offending user: ${interaction.user}`);
    }
    slashCmd?.run(client, interaction);
};
