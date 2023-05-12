import { Blehh, Slash, getMessageId } from "./index.js";
import { Intents } from "./Interfaces/util.js";

export const client = new Blehh({
    intents: [Intents.Guilds, Intents.GuildMessages, Intents.MessageContent],
});

const idCommand = new Slash({
    name: "hi",
    description: "Gets the ID of a message.",
});

client.onReady("Bot is ready!");

client.onMessage("!hi", async (message: any) => {
    idCommand.create();

    await message.reply({ content: `Created the slash command.` });
});

client.onSlash("hi", async (interaction: any) => {
    await interaction.reply({
        content: `Hi Mom!`,
    });
});
