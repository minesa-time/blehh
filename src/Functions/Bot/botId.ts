import { client } from "../../index.js";

export function botId() {
    return client.user?.id;
}