import { ApplicationCommandType, Client, CommandInteraction } from "discord.js";
import { Command } from "./cmd";
import RandomStatement from "../event/ai/RandomStatement";

export const YapCommand: Command = {
    name: "yap",
    description: "talk sir!",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.deferReply();
        
        interaction.followUp({ content: `<@470010465486110730> ${await RandomStatement()}`, allowedMentions: { "parse": [ "users" ] } });
    }
};