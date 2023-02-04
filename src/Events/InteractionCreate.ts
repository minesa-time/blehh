import { Client, Interaction } from "discord.js";

export class InteractionCreate {
    public constructor(private client: Client) {
        client.on("interactionCreate", this.handleInteractionCreate.bind(this));
    }

    private handleInteractionCreate(interaction: Interaction) {
        console.log(interaction);
    }
}
