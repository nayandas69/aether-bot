<div align="center">

# Aether Bot

**Aether Bot** is a modern, lightweight, and scalable Discord bot built with **TypeScript** and **discord.js v14+**. Designed for maintainability and performance, it's a perfect foundation for building bots in 2025 and beyond.

</div>

## Features

- [x] Built with **TypeScript** for reliable type safety
- [x] Uses the **latest Discord.js API (v14+)**
- [x] `.env` support for secure environment configuration
- [x] Instant development with `tsx` hot reloading
- [x] Clean, modular project structure
- [x] Ready for future scaling (slash commands, DB, etc.)

## Getting Started

> [!TIP]
> Before you begin, make sure you have **Node.js v18+** and **npm** installed.

### Clone the Repository

```bash
git clone https://github.com/nayandas69/aether-bot.git
cd aether-bot
```

### Install Dependencies

```bash
npm install
```

### Set Up Your Environment

Create a `.env` file in the root directory and add your bot token:

```
DISCORD_TOKEN=your_actual_token_here
```

> \[!NOTE]
> The `.env.example` file is included to guide you. Never share your real `.env` file publicly.

## How to Get a Discord Bot Token

> \[!TIP]
> You'll need a Discord developer account to do this.

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click **"New Application"** and give it a name.
3. Navigate to the **Bot** tab on the left.
4. Click **Add Bot** and confirm.
5. Under the **Bot** settings:

   * Enable **Privileged Gateway Intents**:

     - [x] Server Members Intent
     - [x] Message Content Intent
6. Click **Reset Token** → **Copy** the token.
7. Paste it into your `.env` file:

```
DISCORD_TOKEN=your_copied_token_here
```

> \[!WARNING]
> Keep this token private. If exposed, reset it immediately from the Developer Portal.

## Running the Bot

### Development (Live Reload)

```bash
npm run dev
```

This uses `tsx` to automatically restart your bot when files change.

### Production Build

```bash
npm run build
npm start
```

## Console Output Example

When the bot launches successfully, you'll see:

```
[✅] AetherBot#1234 is now online.
```

## Planned Improvements

* [ ] Slash command support (application commands)
* [ ] Modular command handler system
* [ ] Error monitoring/logging with winston or Sentry
* [ ] Database integration (MongoDB / PostgreSQL)
* [ ] Docker support for deployment

> \[!INFO]
> These features are planned but not included by default — contributions are welcome!

##  Tech Stack

| Tool                                          | Purpose                         |
| --------------------------------------------- | ------------------------------- |
| [Node.js](https://nodejs.org/)                | JavaScript runtime              |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development           |
| [discord.js](https://discord.js.org/)         | Discord API client              |
| [dotenv](https://github.com/motdotla/dotenv)  | Environment variable management |
| [tsx](https://github.com/esbuild-kit/tsx)     | Fast dev runner with reload     |

## License

This guide is published under the **Unlicense**. Use, copy, modify, or distribute it freely.

**Learn more:** [https://unlicense.org/](https://unlicense.org/)

## Contributing

> \[!TIP]
> Contributions, ideas, and feature requests are highly appreciated!

* Fork this repository
* Create a new branch: `git checkout -b feature/your-feature-name`
* Commit your changes: `git commit -m 'Add your message'`
* Push and create a PR 


## Contact

For questions, suggestions, or support:

* Open an issue in this repo
* Reach out via email: [nayanchandradas@hotmail.com](mailto:nayanchandradas@hotmail.com)

Made with ❤️ for the Discord community.
