import { Client, Interaction } from "discord.js";

export class InteractionCreate {
    public constructor(private client: Client) {
        client.on("interactionCreate", this.handleInteractionCreate.bind(this));
        client.on("interactionRemove", this.handleInteractionRemove.bind(this));
    }

    private handleInteractionCreate(interaction: Interaction) {
        console.log(`Interaction created: ${interaction.id}`);
    }

    private handleInteractionRemove(interaction: Interaction) {
        console.log(`Interaction removed: ${interaction.id}`);
    }
}
