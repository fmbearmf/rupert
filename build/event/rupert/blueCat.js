"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rupert_1 = __importDefault(require("../rupert"));
exports.default = async (message) => {
    message.reply({ content: "<:blue_cat:1203255126727335956>" });
    (0, rupert_1.default)(message);
};
