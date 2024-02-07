import { Command } from "./cmd";
import { ExecCommand } from "./ExecCommand";
import { RupertCommand } from "./RupertCommand";
import { DecisionCommand } from "./DecideCommand";

export const cmds: Array<Command> = [
    RupertCommand,
    ExecCommand,
    DecisionCommand
];