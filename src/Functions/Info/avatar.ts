import { client } from "../../index.js";

/**
 *
 * @param userID The ID of the user.
 * @param size The size of the avatar (16, 32, 64, 128, 256, 512, 1024, 2048, 4096).
 * @param dynamic If `true`, a dynamic avatar will be returned (if available).
 * @returns The URL of the user's avatar.
 */

async function avatar(
    userID: string,
    size?: 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096,
) {
    let user = client.users.cache.get(userID);
    if (!user) {
        return "User not found.";
    }

    let avatarURL = user.displayAvatarURL({
        size: size || 4096,
    });

    return avatarURL;
}

// Exporting avatar function.
export { avatar };
