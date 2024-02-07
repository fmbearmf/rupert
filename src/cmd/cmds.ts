import { Command } from "./cmd";
import { ExecCommand } from "./ExecCommand";
import { RupertCommand } from "./RupertCommand";
import { DecideCommand } from "./DecideCommand";

export const cmds: Array<Command> = [
    RupertCommand,
    ExecCommand,
    DecideCommand
];