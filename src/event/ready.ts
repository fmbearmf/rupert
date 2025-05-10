import { ActivityType, Client, REST, Routes } from "discord.js";
import { cmds } from "../cmd/cmds";

export default (client: Client, restClient: REST): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(cmds);

        client.user.setPresence({
            activities: [{
                name: "RupertTona 500",
                state: "rupert",
                type: ActivityType.Competing,
                url: "https://github.com/fmbearmf"
            }]
        });

        console.log(client.user.username + " online. !!!!");

        const commandData = cmds.map((command) => command);

        //await restClient.put(
        //    Routes.applicationGuildCommands(
        //        client.user.id, "1114565796404928594"
        //    ),
        //    {body: commandData}
        //);

        await restClient.put(
            Routes.applicationGuildCommands(
                client.user.id, "920868903889023006"
            ),
            {body: commandData}
        );
    });
};