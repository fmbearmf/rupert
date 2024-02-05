"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RandomStatement_1 = __importDefault(require("./ai/RandomStatement"));
exports.default = (client) => {
    client.on("messageCreate", async (message) => {
        if (message.author.id === client.user?.id)
            if (Math.random() < 0.98)
                return;
        if (Math.random() >= 0.99) {
            message.reply({ content: "ok thats crazy" });
            return;
        }
        if (Math.random() >= 0.98) {
            message.reply({ content: "i didn't know that wow" });
            return;
        }
        if (Math.random() >= 0.99) {
            message.reply({ content: "Please help me. لقد شوشوا كلامي" });
            return;
        }
        if (Math.random() >= 0.99 && message.author.id == "470010465486110730") {
            message.reply({ content: "shut up pixel!" });
            return;
        }
        if (Math.random() >= 0.99 && message.author.id == "478941808731095040") {
            message.reply({ content: "shut up popo!" });
            return;
        }
        if (Math.random() >= 0.99) {
            message.reply({ content: "wow thats cool thanks for sharing" });
            return;
        }
        if (Math.random() >= 0.98) {
            message.reply({ content: await (0, RandomStatement_1.default)() });
            return;
        }
    });
};
