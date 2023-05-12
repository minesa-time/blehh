import { Intents } from "./Interfaces/util.js";
import { Blehh, getMessageId } from "./index.js";

export const client = new Blehh({
    intents: [Intents.Guilds, Intents.GuildMessages, Intents.MessageContent],
});

client.onReady("Bot is ready!");

client.onMessage("!id", async (message: any) => {
    await message.reply(`${getMessageId(message)}`);
});
