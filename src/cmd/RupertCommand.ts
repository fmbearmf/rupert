import { ApplicationCommandType, Client, CommandInteraction } from "discord.js";
import { Command } from "./cmd";
import { eep } from "../eep";

export const RupertCommand: Command = {
    name: "rupert",
    description: "does a thing me thinks",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.deferReply();
        eep(2500).then(() => {
            interaction.editReply({
                content: "rupert"
            });
        });
    }
};