import { Interaction , MessageComponentInteraction} from "discord.js";

export class SlashCommand {
    name: string;
    type: "CHAT_INPUT" | "USER" | "MESSAGE";
    run: (params: { interaction: MessageComponentInteraction }) => Promise<void>;

    constructor({
        name,
        type,
        run,
    }: {
        name: string;
        type: "CHAT_INPUT" | "USER" | "MESSAGE";
        run: (params: { interaction: MessageComponentInteraction }) => Promise<void>;
    }) {
        this.name = name;
        this.type = type;
        this.run = run;
    }
}
