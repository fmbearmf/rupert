"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const rupert3_1 = require("../cmd/rupert3");
exports.default = (client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        await client.application.commands.set(rupert3_1.cmds);
        client.user.setPresence({
            activities: [{
                    name: "a duel with god.",
                    state: "God is losing. Only Rupert will stand soon.",
                    type: discord_js_1.ActivityType.Competing,
                    url: "https://github.com/bearfm"
                }]
        });
        console.log(client.user.username + " online. yippee.");
    });
};
