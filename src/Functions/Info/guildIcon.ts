import { client } from "../../index.js";
import { Guild } from "discord.js";

/**
 * 
 * @param guildId The id of the guild to retrieve the icon from.
 * @returns The URL of the guild's icon.
 */

async function guildIcon(guildId?: string) {
    let guild;
    if (guildId) {
        guild = client.guilds.cache.get(guildId);
        if (!guild) {
            return "Guild not found.";
        }
    } else {
        let guild = client.guilds.cache.find((g: Guild) => g.members.cache.has(client.user.id));
        if (!guild) {
            return "You are not in any guilds.";
        }
    }

    let iconURL = guild.iconURL({
        format: "png",
        dynamic: true
    });

    return iconURL;
}

// Exporting guildIcon function.
export { guildIcon };
