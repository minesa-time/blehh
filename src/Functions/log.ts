/**
 *
 * @param message The message to log to the console.
 * @returns Logs to console.
 */

export async function log(
    message: any = "You forgot to add a message to log.",
    ...args: any[]
) {
    return console.log(message, ...args);
}
