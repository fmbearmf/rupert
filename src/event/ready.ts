import { ActivityType, Client } from "discord.js";
import { cmds } from "../cmd/cmds";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(cmds);

        client.user.setPresence({ activities: [{ 
            name: "a duel with god.",
            state: "God is losing. Only Rupert will stand soon.",
            type: ActivityType.Competing,
            url: "https://github.com/bearfm"
        }]
        });

        console.log(client.user.username + " online. yippee.");
    });
};