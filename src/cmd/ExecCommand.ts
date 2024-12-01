import { ApplicationCommandOptionType, ApplicationCommandType, Client, CommandInteraction } from "discord.js";
import { Command } from "./cmd";
//import { exec } from "child_process";

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

        //if ((interaction.user.id == "470010465486110730") || (interaction.user.id == "694699534554497046")) {
        //    interaction.editReply({ content: "nice try Pixel, you dont get to use this command" });
        //    return;
        //}
        //
        //const commandObj = interaction.options.get("command", true);
        //const commandString = commandObj.value?.toString();
        //if (!commandString) return;
        //
        //if (commandString.toLowerCase().includes("sudo ") ||
        //    commandString.toLowerCase().includes("rm ") ||
        //    commandString.toLowerCase().includes("systemctl ") ||
        //    commandString.toLowerCase().includes("|") ||
        //    commandString.toLowerCase().includes(">") ||
        //    commandString.toLowerCase().includes("ln ") ||
        //    commandString.toLowerCase().includes("&") ||
        //    commandString.toLowerCase().includes("cat ") ||
        //    commandString.toLowerCase().includes("chmod ") || 
        //    commandString.toLowerCase().includes("vim ")) {
        //    interaction.editReply("you can't run that command.");
        //    return;
        //} else exec(`sudo -u ruper -g ruper ${commandString} | sed 's/\x1B\\[[0-9;]\\{1,\\}[A-Za-z]//g'`, 
        //    {   shell: "/usr/bin/bash", 
        //        env: { PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin" },
        //        cwd: "/",
        //    },
        //    (err, stdout, stderr) => {
        //        if (err) {
        //            interaction.editReply(stderr.toString()).catch(console.log);
        //            return;
        //        }
        //
        //        if (!stdout.toString()) {
        //            interaction.editReply("** **");
        //            return;
        //        }
        //
        //        interaction.editReply(stdout.toString()).catch(console.log);
        //    });

        interaction.editReply("command DISABLED 💔");
    }
};
