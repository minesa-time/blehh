import { Client, ClientOptions } from "discord.js";
import { config } from "dotenv";

config();

// This is the class that will be exported for use in other files
export class NeoJS extends Client {
    constructor(options?: ClientOptions) {
        super(options!);
    }

    /**
     * Ready Event
     * @description This is the method to login to bot.
     * @param message The message that will be logged to the console
     */
    // This is the function that will be called when the client is ready
    public onReady(message: string = "Client is ready!"): void {
        this.login(process.env.TOKEN);
        console.log(`${message}`);
    }
}
