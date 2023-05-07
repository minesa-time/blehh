import { client } from "../../index.js";

export function clientId() {
    return client.user?.id;
}