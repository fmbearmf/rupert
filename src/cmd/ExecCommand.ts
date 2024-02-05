import { ApplicationCommandOptionType, ApplicationCommandType, Client, CommandInteraction } from "discord.js";
import { Command } from "./cmd";
import { exec } from "child_process";

export const ExecCommand: Command = {
    name: "exec",
    description: "executes command on Rupert's server",
    options: [
        {
            name: "command",
            description: "command to execute",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.deferReply();

        const commandObj = interaction.options.get("command", true);
        const commandString = commandObj.value?.toString();
        if (!commandString) return;
        
        exec(`sudo -u nobody /bin/bash -c "${commandString}" | sed 's/\x1B\\[[0-9;]\\{1,\\}[A-Za-z]//g'`, { shell: "/usr/bin/bash", env: { PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin" } }, (err, stdout, stderr) => {
            if (err) {
                interaction.editReply(stderr.toString()).catch(console.log);
                return;
            }

            interaction.editReply(stdout.toString()).catch(interaction.editReply);
        });
    }
};