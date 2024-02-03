import { Client } from "discord.js";
import { cmds } from "./cmd/cmds";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(cmds);

        console.log(client.user.username + "online. yippee.");
    });
};