import { Client, ClientOptions, Events, GatewayIntentBits, Message } from "discord.js";
import { config } from "dotenv";

config();

// This is the class that will be exported for use in other files
export class Blehh extends Client {
    /**
     * Constructor
     * @description This is the constructor for the Blehh class
     * @param options The options for the client
     * @returns The client
     */

    // Adding intents and constructor
    public constructor(options: ClientOptions) {
        super(options);
    }

    /**
     * Ready Event
     * @description This is the method to login to bot.
     * @param message The message that will be logged to the console
     */
    // This is the function that will be called when the client is ready
    public onReady(message: string = "Client is ready!"): void {
        try {
            this.login(process.env.TOKEN);
            console.log(`${message}`);
        } catch (error) {
            console.error(`An error occurred while logging in: ${error}`);
        }
    }


    // This is the function that has name and code property, when the event is triggered, the code will be executed
    public onMessage(name: string, code: Function): void {
        this.on(Events.MessageCreate, async (message: Message) => {
            if (message.content === name) {
                code(message);
            }
        });
    }

    public onSlash(name: string, code: Function): void { 
        this.on(Events.InteractionCreate, async (interaction) => {
            if (!interaction.isCommand()) return;

            if (interaction.commandName === name) {
                code(interaction);
            }
        });
    }
}
