import { Intents } from "./Utils/util.js";
import { Blehh, clientDestroy } from "./index.js";

export const client = new Blehh({
    intents: [Intents.Guilds, Intents.GuildMessages, Intents.MessageContent],
});

client.onReady("Bot is ready!");

client.onMessage("!ping", async () => {
    clientDestroy();
});
