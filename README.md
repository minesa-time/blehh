<div align="center">
    <img src="https://i.kym-cdn.com/entries/icons/facebook/000/041/742/cover3.jpg" alt="Blehhh">
    <h1 style="text-decoration: none;">Blehh</h1>
    <p>blehh, the discord framework.</p>
    <hr>
</div>

## Setup

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
client.onMessage("!ping", async (message) => {
    await message.reply(`${ping()}ms!`);
});
```
