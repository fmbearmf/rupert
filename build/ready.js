"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmds_1 = require("./cmd/cmds");
exports.default = (client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        await client.application.commands.set(cmds_1.cmds);
        console.log(client.user.username + "online. yippee.");
    });
};
