---
sidebar_position: 2
title: Linker
description: Linker module
---

# Linker module

The linker module allows your players to link their Discord account with their Steam/Epic account, which can then be used by other modules or plugins. This module is required for many other modules that needs linked player data.

# How does it work?

When enabling the linker module you need a plugin or mod on your game server that can handle the linking between DBD Nexus and the game server. Here is an example when setting up linking on ARK Survival Evolved:

1. Configure the Linker module in DBD Nexus.
2. Enter the Database details in the linker module and plugin configuration. (make sure both the Nexus module and plugin use the same database!)
3. You can use this [ARK:SE plugin](https://gameservershub.com/forums/resources/discord-game-linker-free.626/) or this [ARK:SA plugin](https://gameservershub.com/forums/resources/asa-arklinkdiscord.719/) or any other similar plugin!
4. Enter the same database details inside the plugin and the nexus module config so they both use the same database!

Now when a player wants to link their discord account they use the `/link steam` or `link epicgames` command in discord, this command will return a code that the user must enter in-game. finally they are linked!

# Which games are supported?

You can use this module for all games that support mods or plugins and have a linking plugin available. The setup will be different based on the plugin you pick.

# Any questions?

Feel free to post your questions in the forum channel inside our [support server](https://discord.com/channels/488177151946915841/1207709181117997146)
