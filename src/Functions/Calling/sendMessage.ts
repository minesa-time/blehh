import { client } from "../../index.js";
import { Message } from "discord.js";

/**
 * 
 * @param channelId The id of the channel to send the message to.
 * @param content The content of the message.
 * @param returnId If set to true, returns the message id after sending the message.
 * @returns The message id or a confirmation message.
 */

async function sendMessage(channelId: string, content: string, returnId?: boolean) {
    let channel = client.channels.cache.get(channelId);
    if (!channel) {
        return "Channel not found.";
    }
    if (channel.type !== "text") {
        return "Invalid channel type. Please provide a text channel id.";
    }

    let message: Message;
    try {
        message = await channel.send(content);
    } catch (error) {
        return "An error occurred while sending the message.";
    }

    if (returnId) {
        return message.id;
    } else {
        return "Message sent successfully.";
    }
}

// Exporting sendMessage function.
export { sendMessage };
