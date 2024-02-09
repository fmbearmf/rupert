"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmds = void 0;
const ExecCommand_1 = require("./ExecCommand");
const RupertCommand_1 = require("./RupertCommand");
const DecideCommand_1 = require("./DecideCommand");
const YapCommand_1 = require("./YapCommand");
exports.cmds = [
    RupertCommand_1.RupertCommand,
    ExecCommand_1.ExecCommand,
    DecideCommand_1.DecideCommand,
    YapCommand_1.YapCommand
];
