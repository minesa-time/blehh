// Importing modules
import { GatewayIntentBits } from "discord.js";
import { Blehh, ping, SlashCommand } from "./index.js";

// Creating a new instance of Blehh
export const client = new Blehh({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
    ],
});

// Adding a method to the instance, this method will be called when the bot is ready.
client.onReady("Bot is ready!");

// New command example
new SlashCommand({
    name: "ping",
    type: "CHAT_INPUT",
    run: async ({ interaction }) => {
        await interaction.reply(`Hello World!`);
    },
});
