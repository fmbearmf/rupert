// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { Client, GatewayIntentBits } from "discord.js";
import ready from "./ready";
import interactionCreation from "./interactionCreation";

if (!process.env.TOKEN) throw new Error("Token not defined.");

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
    ],
});

ready(client);
interactionCreation(client);

client.login(process.env.TOKEN);