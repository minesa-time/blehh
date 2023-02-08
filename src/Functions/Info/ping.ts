import { client } from "../../index.js";

/**
 * 
 * @param typeOfPing The type of ping.
 * @param shardId The id of the shard to get the ping from.
 * @returns Shows bot's ping.
 */

async function ping(typeOfPing: "client" | "database", shardId?: number) {
    let pingTime: number;

    if (typeOfPing === "client") {
        if (shardId !== undefined && client.shard) {
            const shard = client.shard.get(shardId);
            if (shard) {
                pingTime = shard.latency;
            } else {
                return `Shard with id ${shardId} doesn't exist.`;
            }
        } else if (client.shard) {
            pingTime = client.shard.averageLatency;
        } else {
            pingTime = client.ws.ping;
        }
    } else if (typeOfPing === "database") {
        // We will use the database later.
        pingTime = client.db.ping;
    } else {
        return "Invalid type provided. Please provide either 'client' or 'database'.";
    }

    return `${typeOfPing} ping: ${pingTime}ms`;
}

// Exporting ping function.
export { ping };