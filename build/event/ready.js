"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const cmds_1 = require("../cmd/cmds");
exports.default = (client, restClient) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        await client.application.commands.set(cmds_1.cmds);
        client.user.setPresence({
            activities: [{
                    name: "church of rupert",
                    state: "rupert",
                    type: discord_js_1.ActivityType.Competing,
                    url: "https://github.com/bearfm"
                }]
        });
        console.log(client.user.username + " online. yippee.");
        const commandData = cmds_1.cmds.map((command) => command);
        await restClient.put(discord_js_1.Routes.applicationGuildCommands(client.user.id, "1114565796404928594"), { body: commandData });
    });
};
