"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Adjectives_1 = __importDefault(require("./Adjectives"));
const Nouns_1 = __importDefault(require("./Nouns"));
exports.default = async () => {
    const adjectives = (0, Adjectives_1.default)();
    const nouns = (0, Nouns_1.default)();
    const randomIndex = Math.floor(Math.random() * adjectives.length);
    const stmt = `${adjectives[randomIndex]} ${nouns[randomIndex]}...`;
    return stmt;
};
