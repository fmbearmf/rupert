import { ApplicationCommandType, Client, CommandInteraction } from "discord.js";
import { Command } from "./cmd";

export const RupertCommand: Command = {
    name: "rupert",
    description: "does a thing me thinks",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.reply({
            content: "rupert"
        });
    }
};