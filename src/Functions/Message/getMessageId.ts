import { Message } from "discord.js";

/**
 * Gets the ID of a message.
 * @param message The message to get the ID of.
 * @returns The ID of the message.
 */

export function getMessageId(message: Message | any) {
    return message.id;
}
