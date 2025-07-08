import { Client, CommandInteraction, Interaction, RepliableInteraction } from "discord.js";
import { cmds } from "../cmd/cmds";
import { bannedRupertUsers } from "./messageCreate";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        try {
            if (bannedRupertUsers.includes(interaction.user.id)) return; 

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
        await interaction.reply({ content: "uhhh something screwed up. tell bear <@307677300730757120>." });
        console.error(`ERROR: ${interaction.commandName} doesn't exist.`);
        console.error(`ERROR: Offending user: ${interaction.user}`);
    } else slashCmd.run(client, interaction);
};