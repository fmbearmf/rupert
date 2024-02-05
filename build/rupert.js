"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const discord_js_1 = require("discord.js");
const ready_1 = __importDefault(require("./event/ready"));
const interactionCreate_1 = __importDefault(require("./event/interactionCreate"));
const messageCreate_1 = __importDefault(require("./event/messageCreate"));
if (!process.env.TOKEN)
    throw new Error("Token not defined.");
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildMembers,
    ],
});
const rest = new discord_js_1.REST({ version: "9" }).setToken(process.env.TOKEN);
(0, ready_1.default)(client, rest);
(0, interactionCreate_1.default)(client);
(0, messageCreate_1.default)(client);
client.login(process.env.TOKEN);
