import { client } from "../../index.js";

/**
 * 
 * @param typeOfPing The type of ping.
 * @param shardId The id of the shard to get the ping from.
 * @returns Shows bot's ping.
 */

async function ping(typeOfPing: "client" | "database", shardId?: number): Promise<number> {
    if (typeOfPing === "client") {
        if (shardId) {
            return client.ws.shards.get(shardId)?.ping as number;
        } else {
            return client.ws.ping;
        }
    } else {
        throw new Error("Invalid type of ping.");
    }
}

// Exporting ping function.
export { ping };