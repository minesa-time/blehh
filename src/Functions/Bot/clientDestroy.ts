import { client } from "../../index.js";

export function clientDestroy() {
    console.log("Destroying bot client...");
    client.destroy();
}
