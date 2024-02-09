import { Command } from "./cmd";
import { ExecCommand } from "./ExecCommand";
import { RupertCommand } from "./RupertCommand";
import { DecideCommand } from "./DecideCommand";
import { YapCommand } from "./YapCommand";

export const cmds: Array<Command> = [
    RupertCommand,
    ExecCommand,
    DecideCommand,
    YapCommand
];