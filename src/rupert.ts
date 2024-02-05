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

const rest = new REST({version: "9"}).setToken(
    process.env.TOKEN as string
);

ready(client, rest);
interactionCreation(client);
messageSent(client);

client.login(process.env.TOKEN);