import { ApplicationCommandType, Client, CommandInteraction } from "discord.js";
import { Command } from "./cmd";
import RandomStatement from "../event/ai/RandomStatement";

export const YapCommand: Command = {
    name: "yap",
    description: "talk sir!",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        interaction.deferReply();
        
        interaction.editReply({ content: await RandomStatement() });
    }
};