import { Client } from "discord.js";

const client = new Client({ intents: "GuildMessages" });

/**
 *
 * @returns Shows bot's ping.
 */

export async function botPing() {
	return client.ws.ping;
}
