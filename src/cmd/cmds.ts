import { Command } from "./cmd";
import { RupertCommand } from "./RupertCommand";
import { DecideCommand } from "./DecideCommand";
import { YapCommand } from "./YapCommand";

export const cmds: Array<Command> = [RupertCommand, DecideCommand, YapCommand];
