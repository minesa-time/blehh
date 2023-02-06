import { Interaction } from "discord.js";

interface Command {
    name: string;
    description: string;
    usage: string;
    aliases: string[];
    execute: (interaction: Interaction, args: string[]) => void;
}

export class Commands implements Command {
    name: string;
    description: string;
    usage: string;
    aliases: string[];
    execute: (interaction: Interaction, args: string[]) => void;

    constructor(
        name: string,
        description: string,
        usage: string,
        aliases: string[],
        execute: (interaction: Interaction, args: string[]) => void,
    ) {
        this.name = name;
        this.description = description;
        this.usage = usage;
        this.aliases = aliases;
        this.execute = execute;
    }
}
