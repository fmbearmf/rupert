"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rupert_1 = __importDefault(require("./rupert"));
exports.default = (client) => {
    client.on("messageCreate", async (message) => {
        if (message.author.id === client.user?.id)
            if (Math.random() < 0.95)
                return;
        (0, rupert_1.default)(message);
    });
};
