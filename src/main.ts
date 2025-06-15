// This file is part of the Discord Bot project.
// It initializes the Discord client and sets up event listeners.

import 'dotenv/config';
import { Client, GatewayIntentBits, Partials } from 'discord.js';
import ready from './events/ready';

// Create a new Discord client instance with the necessary intents and partials
// Ensure to include the required intents for your bot's functionality
// For example, Guilds, GuildMessages, MessageContent, and GuildMembers are commonly used
// The Partials.Channel allows the bot to handle messages in partial channels
// Make sure to set the DISCORD_TOKEN environment variable in your .env file
// to authenticate the bot with Discord's API.

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ],
    partials: [Partials.Channel]
});

// Set up an event listener for the 'ready' event

client.once('ready', () => ready(client));

client.login(process.env.DISCORD_TOKEN);
