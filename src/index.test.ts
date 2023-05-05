// Importing modules
import { GatewayIntentBits } from "discord.js";
import { Blehh, ping } from "./index.js";

export const client = new Blehh({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
    ],
});

client.onReady("Bot is ready!");

client.onMessage("!ping", async (message: any) => {
    const clientPing = await ping("client");

    message.reply(`Client ping: ${clientPing}ms!`);
});


