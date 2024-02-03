// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { Client, GatewayIntentBits } from "discord.js";
import ready from "./event/ready";
import interactionCreation from "./event/interactionCreation";
import messageSent from "./event/messageSent";

if (!process.env.TOKEN) throw new Error("Token not defined.");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

ready(client);
interactionCreation(client);
messageSent(client);

client.login(process.env.TOKEN);