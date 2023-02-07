// This file is for ping function.
import { client } from "../../index.js";

/**
 * @param typeOfPing The type of ping.
 * @returns Shows bot's ping.
 */

async function ping(typeOfPing: "client" | "database") {
    if (typeOfPing === "client") {
        return client.ws.ping;
    } else if (typeOfPing === "database") {
        // We will use the database later.
        return client.db.ping;
    } else {
        return "Invalid type provided. Please provide either 'client' or 'database'.";
    }
}

// Exporting ping function.
export { ping };
