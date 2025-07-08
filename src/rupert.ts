// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { Client, GatewayIntentBits, REST } from "discord.js";
import ready from "./event/ready";
import interactionCreation from "./event/interactionCreate";
import messageSent from "./event/messageCreate";

if (!process.env.TOKEN) throw new Error("Token not defined.");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

const client2 = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

const rest = new REST({version: "9"}).setToken(
    process.env.TOKEN as string
);

const rest2 = new REST({version: "9"}).setToken(
    process.env.EVIL_TOKEN as string
);

ready(client, rest);
interactionCreation(client);
messageSent(client, client2);

ready(client2, rest2);
interactionCreation(client2);
messageSent(client2, client);

client.login(process.env.TOKEN);
client2.login(process.env.EVIL_TOKEN);