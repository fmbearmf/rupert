import { ApplicationCommandType, Client, CommandInteraction } from "discord.js";
import { Command } from "./cmd";
import { eep } from "../eep";

export const DecideCommand: Command = {
    name: "decide",
    description: "yes or no",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        interaction.deferReply();

        let decision = true;

        if (Math.random() <= 0.5) decision = false;

        await eep(5000).then(() => {
            interaction.editReply({
                content: `${decision ? "yes" : "no"}`
            });
        });
    }
};