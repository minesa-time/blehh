import { Message } from "discord.js";

/**
 * Gets the ID of a message.
 * @param message The message to get the ID of.
 * @returns The ID of the message.
 */

export function getMessageId(message: Message) {
    if (!message) {
        throw new Error("You forgot to add a message to get the ID of.");
    }
    return message.id;
}
