// This file is part of the Discord Bot Template project.

import { Client } from 'discord.js';

/**
 * Event handler for when the bot is ready.
 * @param {Client} client - The Discord client instance.
 */
export default function ready(client: Client): void {
    console.log(`[✅] ${client.user?.tag} is now online.`);
}
