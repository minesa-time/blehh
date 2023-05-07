import { Intents } from "./Utils/util.js";
import { Blehh, ping } from "./index.js";

export const client = new Blehh({ intents: [Intents.Guilds, Intents.GuildMessages, Intents.MessageContent] });

client.onReady("Bot is ready!");

client.onMessage("!ping", async (message: any) => {
    const clientPing = await ping("client");

    message.reply(`Client ping: ${clientPing}ms!`);
});