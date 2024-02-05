"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rupert_1 = __importDefault(require("./rupert/rupert"));
const rupert3_1 = __importDefault(require("./rupert/rupert3"));
const rupert2_1 = __importDefault(require("./rupert/rupert2"));
const rupert4_1 = __importDefault(require("./rupert/rupert4"));
exports.default = async (message) => {
    const msg = message.content.toLowerCase();
    if (msg.includes("rupert"))
        (0, rupert_1.default)(message);
    if (msg.includes("broke"))
        (0, rupert3_1.default)(message);
    if (msg.includes("george"))
        (0, rupert2_1.default)(message);
    if (msg.includes("blue"))
        (0, rupert4_1.default)(message);
};
