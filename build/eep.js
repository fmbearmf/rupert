"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eep = void 0;
const eep = (ms) => new Promise(r => setTimeout(r, ms));
exports.eep = eep;
