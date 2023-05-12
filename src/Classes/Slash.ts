import { Client } from "discord.js";
import { client as blehClient } from "../index.js";

interface SlashCommandOptions {
    name: string;
    description?: string;
    options?: any;
}

export class Slash {
    name: string;
    description?: string;
    options?: any;

    constructor(options: SlashCommandOptions) {
        this.name = options.name;
        this.description = options.description;
        this.options = options.options;
    }

    create(client: Client = blehClient) {
        (async () => {
            client.application!.commands.create({
                name: this.name,
                description: this.description!,
                options: this.options,
            });
        })();
    }

    delete(client: Client = blehClient) {
        (async () => {
            const commands = await client.application!.commands.fetch();
            const command = commands.find(
                (command) => command.name === this.name,
            );
            if (command) {
                await command.delete();
            }
        })();
    }
}
