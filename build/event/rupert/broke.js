"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rupert_1 = __importDefault(require("../rupert"));
exports.default = async (message) => {
    message.reply({ content: "<:junya:1178867087805009950>" });
    (0, rupert_1.default)(message);
};
