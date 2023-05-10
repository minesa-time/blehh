<div align="center">
    <img src="https://media.discordapp.net/attachments/1042307139424751687/1072842820345413763/cover3.png?width=1024&height=480" alt="Blehhh">
    <h1 style="text-decoration: none;">Blehhh</h1>
    <p>blehhh, the discord framework.</p>
</div>

Setup example
```js
// Importing Blehh and ping 
import { Blehh, ping } from "blehh";

// Defining blehh
const client = new Blehh({
    intents: [
        Intents.Guilds,
        Intents.GuildMessages,
        Intents.MessageContent
    ],
});

// When bot is ready, return this message on console
client.onReady("Bot is ready!");

// If user types “!ping” it calls ping function and returns ping
client.onMessage("!ping", async (message: any) => {
    await message.reply(`${ping()}ms!`);
});
```
