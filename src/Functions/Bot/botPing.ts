import { client } from "../../index.js";

/**
 *
 * @returns Shows bot's ping.
 */

async function botPing() {
    return client.ws.ping;
}

botPing().then((ping) => ping);

export { botPing };