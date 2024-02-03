import { Client, CommandInteraction, Interaction } from "discord.js";
import { cmds } from "../cmd/cmds";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
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

const handleSlash = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCmd = cmds.find(cmd => cmd.name === interaction.commandName);

    if (!slashCmd) {
        await interaction.reply({ content: "uhhh something screwed up. tell bear." });
        console.error(`ERROR: ${interaction.commandName} doesn't exist.`);
        console.error(`ERROR: Offending user: ${interaction.user}`);
    }

    slashCmd?.run(client, interaction);
};