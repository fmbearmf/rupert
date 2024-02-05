import { Command } from "./cmd";
import { ExecCommand } from "./ExecCommand";
import { RupertCommand } from "./RupertCommand";

export const cmds: Array<Command> = [
    RupertCommand,
    ExecCommand
];