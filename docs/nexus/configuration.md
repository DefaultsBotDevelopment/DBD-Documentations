---
sidebar_position: 3
---

# Configuration

DBD Nexus Bots allow 2 types of configurations: Local and Remote. Local configuration is done by editing the `config.js` file in the bot's directory. Remote configuration is done by editing the configuration page on the DBD Nexus site.

## Local Configuration

When running the bot with local configuration, you need to configure your `config.js` file inside the bot folder. This way you can run the bot without the need of configuring it through the DBD Nexus site. Below is each setting in the `config.js` file explained and documented.

:::note
This method is recommended for experienced users who are familiar with the configuration of JSON files and understand the structure of JSON configuration files. If you are new to this or not comfortable with editing JSON files, it is recommended to use the remote configuration method instead.

Make sure when configuring to use a proper text editor like [Visual Studio Code](https://code.visualstudio.com/download) to prevent any formatting issues.
:::

## Options

### General

| Option                         | Type                          | Default | Description                                                                                                              |
| ------------------------------ | ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| `general_debug`                | [Boolean](#boolean)           | `true`  | When enabled the bot will output extra debug information to the console.                                                 |
| `general_bot_token`            | [String](#string)             | `""`    | The bot token from Discord. Read more about it [here](/docs/nexus/setup.md)                                              |
| `general_credentials_guild_id` | [String](#string)             | `""`    | The Discord server ID where you invited the bot into. [(How to get server ID)](#how-to-enable-developer-mode-in-discord) |
| `general_presence_username`    | [String](#string)             | `""`    | The username of the bot.                                                                                                 |
| `general_presence_type`        | [String](#string)             | `""`    | The presence type of the bot. Available options are `Playing`, `Listening`, `Watching`, `Streaming`.                     |
| `general_presence_status`      | [String](#string)             | `""`    | The status of the bot. Available options are `Online`, `Idle`, `Dnd`, `Invisible`.                                       |
| `general_presence_activity`    | [String](#string)             | `""`    | The activity of the bot. This is shown inside the bot status section                                                     |
| `general_gameservers`          | [GameServers](#gameservers)[] | `[]`    | A list of game servers that the bot has access to.                                                                       |

### PlayerCounter

| Option                          | Type                                  | Default | Description                                           |
| ------------------------------- | ------------------------------------- | ------- | ----------------------------------------------------- |
| `playercounter_enabled`         | [Boolean](#boolean)                   | `true`  | Wether the player counter module is enabled or not.   |
| `playercounter_update_interval` | [Number](#number)                     | `300`   | The interval in seconds to update the server details. |
| `playercounter_panels`          | [CounterPanels](#counterpanels)[]     | `[]`    | A list of counter panels.                             |
| `playercounter_channels`        | [CounterChannels](#counterchannels)[] | `[]`    | A list of counter channels.                           |
| `playercounter_bots`            | [CounterBots](#counterbots)[]         | `[]`    | A list of counter bots.                               |

### RCON

| Option                | Type                                      | Default | Description                                                                   |
| --------------------- | ----------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `rcon_enabled`        | [Boolean](#boolean)                       | `false` | Wether the RCON module is enabled or not.                                     |
| `rcon_full_access`    | [Array](#array)                           | `[]`    | A list of Discord Role IDs that have full access to the RCON module features. |
| `rcon_log_channel`    | [String](#string)                         | `""`    | The channel ID where the RCON logs are sent.                                  |
| `rcon_permissions`    | [RconPermission](#rconpermission)[]       | `[]`    | A list of role permissions for the RCON module.                               |
| `rcon_panels`         | [RconPanels](#rconpanels)[]               | `[]`    | A list of RCON panels.                                                        |
| `rcon_scripts`        | [RconScripts](#rconscripts)[]             | `[]`    | A list of RCON scripts.                                                       |
| `rcon_timed_commands` | [RconTimedCommands](#rcontimedcommands)[] | `[]`    | A list of timed RCON commands.                                                |

### Controller

| Option                     | Type                                    | Default | Description                                                                    |
| -------------------------- | --------------------------------------- | ------- | ------------------------------------------------------------------------------ |
| `controller_enabled`       | [Boolean](#boolean)                     | `false` | Wether the controller module is enabled or not.                                |
| `controller_allowed_roles` | [Array](#array)                         | `[]`    | A list of Discord Role IDs that have access to the controller module features. |
| `controller_panels`        | [ControllerPanels](#controllerpanels)[] | `[]`    | A list of controller panels.                                                   |

### Linker

| Option                                   | Type                | Default     | Description                                                                        |
| ---------------------------------------- | ------------------- | ----------- | ---------------------------------------------------------------------------------- |
| `linker_enabled`                         | [Boolean](#boolean) | `false`     | Wether the linker module is enabled or not.                                        |
| `linker_steam_general_enabled`           | [Boolean](#boolean) | `false`     | Wether the Steam linking is enabled or not.                                        |
| `linker_steam_general_method`            | [String](#string)   | `code`      | The method of linking Steam accounts. Available options are `code`, `credentials`. |
| `linker_steam_panel_channel`             | [String](#string)   | `""`        | The channel ID where the Steam linking panel is located.                           |
| `linker_steam_panel_message`             | [Object](#object)   | `{}`        | The message of the Steam linking panel.                                            |
| `linker_steam_response_error`            | [Object](#object)   | `{}`        | The error response of the Steam linking.                                           |
| `linker_steam_response_success`          | [Object](#object)   | `{}`        | The success response of the Steam linking.                                         |
| `linker_steam_response_code`             | [Object](#object)   | `{}`        | The code response of the Steam linking.                                            |
| `linker_steam_database_host`             | [String](#string)   | `localhost` | The host of the Steam linking database.                                            |
| `linker_steam_database_user`             | [String](#string)   | `root`      | The user of the Steam linking database.                                            |
| `linker_steam_database_port`             | [Number](#number)   | `3306`      | The port of the Steam linking database.                                            |
| `linker_steam_database_password`         | [String](#string)   | `""`        | The password of the Steam linking database.                                        |
| `linker_steam_database_database`         | [String](#string)   | `""`        | The database of the Steam linking database.                                        |
| `linker_steam_database_table`            | [String](#string)   | `""`        | The table of the Steam linking database.                                           |
| `linker_steam_database_column_code`      | [String](#string)   | `""`        | The column of the Steam linking database for the invite code.                      |
| `linker_steam_database_column_discordid` | [String](#string)   | `""`        | The column of the Steam linking database for the Discord ID.                       |
| `linker_steam_database_column_steamid`   | [String](#string)   | `""`        | The column of the Steam linking database for the Steam ID.                         |
| `linker_epic_general_enabled`            | [Boolean](#boolean) | `false`     | Wether the Epic linking is enabled or not.                                         |
| `linker_epic_general_method`             | [String](#string)   | `code`      | The method of linking Epic accounts. Available options are `code`, `credentials`.  |
| `linker_epic_panel_channel`              | [String](#string)   | `""`        | The channel ID where the Epic linking panel is located.                            |
| `linker_epic_panel_message`              | [Object](#object)   | `{}`        | The message of the Epic linking panel.                                             |
| `linker_epic_response_error`             | [Object](#object)   | `{}`        | The error response of the Epic linking.                                            |
| `linker_epic_response_success`           | [Object](#object)   | `{}`        | The success response of the Epic linking.                                          |
| `linker_epic_response_code`              | [Object](#object)   | `{}`        | The code response of the Epic linking.                                             |
| `linker_epic_database_host`              | [String](#string)   | `localhost` | The host of the Epic linking database.                                             |
| `linker_epic_database_user`              | [String](#string)   | `root`      |
| `linker_epic_database_port`              | [Number](#number)   | `3306`      |
| `linker_epic_database_password`          | [String](#string)   | `""`        |
| `linker_epic_database_database`          | [String](#string)   | `""`        |
| `linker_epic_database_table`             | [String](#string)   | `""`        |
| `linker_epic_database_column_code`       | [String](#string)   | `""`        |
| `linker_epic_database_column_discordid`  | [String](#string)   | `""`        |
| `linker_epic_database_column_epicid`     | [String](#string)   | `""`        |

### Shop

| Option                                | Type                                | Default     | Description                                                              |
| ------------------------------------- | ----------------------------------- | ----------- | ------------------------------------------------------------------------ |
| `shop_enabled`                        | [Boolean](#boolean)                 | `false`     | Wether the shop module is enabled or not.                                |
| `shop_staff_role_ids`                 | [Array](#array)                     | `[]`        | A list of Discord Role IDs that have access to the shop module features. |
| `shop_log_channel_id`                 | [String](#string)                   | `""`        | The channel ID where the shop logs are sent.                             |
| `shop_command_trade_enabled`          | [Boolean](#boolean)                 | `true`      | Wether the trade command is enabled or not.                              |
| `shop_command_trade_max`              | [Number](#number)                   | `1000`      | The maximum amount of points that can be traded.                         |
| `shop_command_trade_message`          | [Message](#message)                 | `{}`        | The message of the trade command.                                        |
| `shop_command_trade_success`          | [Message](#message)                 | `{}`        | The success message of the trade command.                                |
| `shop_command_reward_enabled`         | [Boolean](#boolean)                 | `true`      | Wether the reward command is enabled or not.                             |
| `shop_command_reward_min`             | [Number](#number)                   | `100`       | The minimum amount of points that can be rewarded.                       |
| `shop_command_reward_max`             | [Number](#number)                   | `1000`      | The maximum amount of points that can be rewarded.                       |
| `shop_command_reward_cooldown_hours`  | [Number](#number)                   | `24`        | The cooldown in hours for the reward command.                            |
| `shop_command_reward_message`         | [Message](#message)                 | `{}`        | The message of the reward command.                                       |
| `shop_command_daily_enabled`          | [Boolean](#boolean)                 | `true`      | Wether the daily command is enabled or not.                              |
| `shop_command_daily_min`              | [Number](#number)                   | `100`       | The minimum amount of points that can be rewarded daily.                 |
| `shop_command_daily_max`              | [Number](#number)                   | `1000`      | The maximum amount of points that can be rewarded daily.                 |
| `shop_command_daily_cooldown_hours`   | [Number](#number)                   | `24`        | The cooldown in hours for the daily command.                             |
| `shop_command_daily_message`          | [Message](#message)                 | `{}`        | The message of the daily command.                                        |
| `shop_command_stats_enabled`          | [Boolean](#boolean)                 | `true`      | Wether the stats command is enabled or not.                              |
| `shop_command_stats_message`          | [Message](#message)                 | `{}`        | The message of the stats command.                                        |
| `shop_command_deposit_message`        | [Message](#message)                 | `{}`        | The message of the deposit command.                                      |
| `shop_command_withdraw_message`       | [Message](#message)                 | `{}`        | The message of the withdraw command.                                     |
| `shop_external_points_enabled`        | [Boolean](#boolean)                 | `true`      | Wether the external points system is enabled or not.                     |
| `shop_external_points_host`           | [String](#string)                   | `localhost` | The host of the external points database.                                |
| `shop_external_points_user`           | [String](#string)                   | `root`      | The user of the external points database.                                |
| `shop_external_points_port`           | [Number](#number)                   | `3306`      | The port of the external points database.                                |
| `shop_external_points_password`       | [String](#string)                   | `""`        | The password of the external points database.                            |
| `shop_external_points_database`       | [String](#string)                   | `""`        | The database of the external points database.                            |
| `shop_external_points_table`          | [String](#string)                   | `""`        | The table of the external points database.                               |
| `shop_external_points_column_steamid` | [String](#string)                   | `""`        | The column of the external points database for the Steam ID.             |
| `shop_external_points_column_epicid`  | [String](#string)                   | `""`        | The column of the external points database for the Epic ID.              |
| `shop_external_points_column_points`  | [String](#string)                   | `""`        | The column of the external points database for the points.               |
| `shop_points_per_chat`                | [Number](#number)                   | `1`         | The amount of points given per chat message.                             |
| `shop_points_chat_threshold_sec`      | [Number](#number)                   | `10`        | The threshold in seconds for the chat points.                            |
| `shop_points_per_voice_min`           | [Number](#number)                   | `1`         | The amount of points given per minute in voice chat.                     |
| `shop_points_voice_threshold_min`     | [Number](#number)                   | `1`         | The threshold in minutes for the voice points.                           |
| `shop_stack_role_point_additions`     | [Boolean](#boolean)                 | `true`      | Wether the role point additions are stacked or not.                      |
| `shop_display_item_format`            | [Object](#object)                   | `{}`        | The formatting of the item display.                                      |
| `shop_display_kit_format`             | [Object](#object)                   | `{}`        | The formatting of the kit display.                                       |
| `shop_roles`                          | [ShopRoles](#shoproles)[]           | `[]`        | A list of shop roles.                                                    |
| `shop_categories`                     | [ShopCategories](#shopcategories)[] | `[]`        | A list of shop categories.                                               |
| `shop_kits`                           | [ShopKits](#shopkits)[]             | `[]`        | A list of shop kits.                                                     |

### Stats

| Option                                | Type                                     | Default | Description                                                                   |
| ------------------------------------- | ---------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `stats_enabled`                       | [Boolean](#boolean)                      | `false` | Wether the stats module is enabled or not.                                    |
| `stats_command_leaderboard_enabled`   | [Boolean](#boolean)                      | `true`  | Wether the leaderboard command is enabled or not.                             |
| `stats_command_leaderboard_ephemeral` | [Boolean](#boolean)                      | `true`  | Wether the leaderboard command is ephemeral or not.                           |
| `stats_command_leaderboard_include`   | [Array](#array)                          | `[]`    | A list of leaderboard IDs that are included in the command.                   |
| `stats_command_stats_enabled`         | [Boolean](#boolean)                      | `true`  | Wether the stats command is enabled or not.                                   |
| `stats_command_stats_shorten`         | [Boolean](#boolean)                      | `true`  | When enabled converts the stat value from 1000 → 1K                           |
| `stats_command_stats_localized`       | [Boolean](#boolean)                      | `true`  | When enabled converts the stat value from 1000 → 1.000 or 1,000               |
| `stats_command_stats_ephemeral`       | [Boolean](#boolean)                      | `true`  | When enabled only the person who used the command can see it.                 |
| `stats_command_stats_grouped`         | [Boolean](#boolean)                      | `true`  | When enabled allows the stats command to show stats of an entire group/tribe. |
| `stats_command_stats_search_others`   | [Boolean](#boolean)                      | `true`  | Wether the stats command can search for others or not.                        |
| `stats_command_stats_player_path`     | [String](#string)                        | `""`    | The path to the player stats. Example: "Database>Table>Column"                |
| `stats_command_stats_group_path`      | [String](#string)                        | `""`    | The path to the group stats. Example: "Database>Table>Column"                 |
| `stats_command_stats_pages`           | [StatsPages](#statspages)[]              | `[]`    | A list of stats pages.                                                        |
| `stats_leaderboards_refetch_sec`      | [Number](#number)                        | `60`    | The interval in seconds to refetch the leaderboard data.                      |
| `stats_leaderboards`                  | [StatsLeaderboards](#statsleaderboard)[] | `[]`    | A list of leaderboards.                                                       |
| `stats_databases`                     | [StatsDatabases](#statsdatabase)[]       | `[]`    | A list of databases.                                                          |

### Utility

| Option                                     | Type                                    | Default | Description                                               |
| ------------------------------------------ | --------------------------------------- | ------- | --------------------------------------------------------- |
| `utility_enabled`                          | [Boolean](#boolean)                     | `false` | Wether the utility module is enabled or not.              |
| `utility_announcer_enabled`                | [Boolean](#boolean)                     | `true`  | Wether the announcer module is enabled or not.            |
| `utility_announcer_default_message`        | [Message](#message)                     | `{}`    | The default message of the announcer module.              |
| `utility_welcomer_join_enabled`            | [Boolean](#boolean)                     | `true`  | Wether the join welcomer module is enabled or not.        |
| `utility_welcomer_join_channel_id`         | [String](#string)                       | `""`    | The channel ID where the join welcomer message is sent.   |
| `utility_welcomer_join_message`            | [Message](#message)                     | `{}`    | The message of the join welcomer module.                  |
| `utility_welcomer_join_dm_enabled`         | [Boolean](#boolean)                     | `true`  | Wether the join welcomer DM is enabled or not.            |
| `utility_welcomer_join_dm_message`         | [Message](#message)                     | `{}`    | The message of the join welcomer DM.                      |
| `utility_welcomer_leave_enabled`           | [Boolean](#boolean)                     | `true`  | Wether the leave welcomer module is enabled or not.       |
| `utility_welcomer_leave_channel_id`        | [String](#string)                       | `""`    | The channel ID where the leave welcomer message is sent.  |
| `utility_welcomer_leave_message`           | [Message](#message)                     | `{}`    | The message of the leave welcomer module.                 |
| `utility_wipecountdown_enabled`            | [Boolean](#boolean)                     | `true`  | Wether the wipe countdown module is enabled or not.       |
| `utility_wipecountdown_ephemeral`          | [Boolean](#boolean)                     | `true`  | Wether the wipe countdown message is ephemeral or not.    |
| `utility_wipecountdown_interval`           | [String](#string)                       | `""`    | The interval of the wipe countdown message.               |
| `utility_wipecountdown_message`            | [Message](#message)                     | `{}`    | The message of the wipe countdown module.                 |
| `utility_suggestions_enabled`              | [Boolean](#boolean)                     | `true`  | Wether the suggestions module is enabled or not.          |
| `utility_suggestions_channel_ids`          | [Array](#array)                         | `[]`    | A list of channel IDs where the suggestions are sent.     |
| `utility_suggestions_message`              | [Message](#message)                     | `{}`    | The message of the suggestions module.                    |
| `utility_recruiting_lfg_enabled`           | [Boolean](#boolean)                     | `true`  | Wether the LFG recruiting module is enabled or not.       |
| `utility_recruiting_lfg_channel_id`        | [String](#string)                       | `""`    | The channel ID where the LFG recruiting message is sent.  |
| `utility_recruiting_lfg_category_id`       | [String](#string)                       | `""`    | The category ID where the LFG recruiting message is sent. |
| `utility_recruiting_lfg_negotiation_hours` | [Number](#number)                       | `1`     | The negotiation hours of the LFG recruiting message.      |
| `utility_recruiting_lfg_message`           | [Message](#message)                     | `{}`    | The message of the LFG recruiting module.                 |
| `utility_recruiting_lfm_enabled`           | [Boolean](#boolean)                     | `true`  | Wether the LFM recruiting module is enabled or not.       |
| `utility_recruiting_lfm_channel_id`        | [String](#string)                       | `""`    | The channel ID where the LFM recruiting message is sent.  |
| `utility_recruiting_lfm_category_id`       | [String](#string)                       | `""`    | The category ID where the LFM recruiting message is sent. |
| `utility_recruiting_lfm_negotiation_hours` | [Number](#number)                       | `1`     | The negotiation hours of the LFM recruiting message.      |
| `utility_recruiting_lfm_message`           | [Message](#message)                     | `{}`    | The message of the LFM recruiting module.                 |
| `utility_auction_enabled`                  | [Boolean](#boolean)                     | `true`  | Wether the auction module is enabled or not.              |
| `utility_auction_channel_id`               | [String](#string)                       | `""`    | The channel ID where the auction message is sent.         |
| `utility_auction_category_id`              | [String](#string)                       | `""`    | The category ID where the auction message is sent.        |
| `utility_auction_negotiation_hours`        | [Number](#number)                       | `1`     | The negotiation hours of the auction message.             |
| `utility_auction_duration_hours`           | [Number](#number)                       | `24`    | The duration hours of the auction message.                |
| `utility_auction_active_message`           | [Message](#message)                     | `{}`    | The message of the active auction module.                 |
| `utility_auction_ended_message`            | [Message](#message)                     | `{}`    | The message of the ended auction module.                  |
| `utility_selling_enabled`                  | [Boolean](#boolean)                     | `true`  | Wether the selling module is enabled or not.              |
| `utility_selling_channel_id`               | [String](#string)                       | `""`    | The channel ID where the selling message is sent.         |
| `utility_selling_category_id`              | [String](#string)                       | `""`    | The category ID where the selling message is sent.        |
| `utility_selling_negotiation_hours`        | [Number](#number)                       | `1`     | The negotiation hours of the selling message.             |
| `utility_selling_message`                  | [Message](#message)                     | `{}`    | The message of the selling module.                        |
| `utility_request_enabled`                  | [Boolean](#boolean)                     | `true`  | Wether the request module is enabled or not.              |
| `utility_request_channel_id`               | [String](#string)                       | `""`    | The channel ID where the request message is sent.         |
| `utility_request_category_id`              | [String](#string)                       | `""`    | The category ID where the request message is sent.        |
| `utility_request_negotiation_hours`        | [Number](#number)                       | `24`    | The negotiation hours of the request message.             |
| `utility_request_message`                  | [Message](#message)                     | `{}`    | The message of the request module.                        |
| `utility_responder`                        | [UtilityResponder](#utilityresponder)[] | `[]`    | A list of utility responders.                             |
| `utility_embedder`                         | [UtilityEmbedder](#utilityembedder)[]   | `[]`    | A list of utility embedders.                              |

### Commander

| Option              | Type                                  | Default | Description                                    |
| ------------------- | ------------------------------------- | ------- | ---------------------------------------------- |
| `commander_enabled` | [Boolean](#boolean)                   | `false` | Wether the commander module is enabled or not. |
| `commander_panels`  | [CommanderPanels](#commanderpanels)[] | `[]`    | A list of commander panels.                    |

## Types

### Boolean

A boolean value is either `true` or `false`. It is used to enable or disable a feature. For example, `general_debug` is a boolean value that enables or disables debug mode.

### String

A string value is a sequence of characters enclosed in double quotes. It is used to store text data. For example, `general_bot_token` is a string value that stores the bot token.

### Number

A number value is a numeric value. It is used to store numeric data. For example, `playercounter_update_interval` is a number value that stores the update interval in seconds.

### Array

An array value is a list of values enclosed in square brackets `[]`. It is used to store multiple values. For example, `general_gameservers` is an list of game server objects. Or an list of [Strings](#string) like this `["tag1", "tag2", "tag3"]`.

### Message

The message object is a discord message object. All options are optional and at some places some options are disabled. It contains the following options:

| Option              | Type                            | Default | Description                                                             |
| ------------------- | ------------------------------- | ------- | ----------------------------------------------------------------------- |
| `message_content`   | [String](#string)               | `""`    | The content of the message.                                             |
| `embed_title`       | [String](#string)               | `""`    | The title of the embed message.                                         |
| `embed_description` | [String](#string)               | `""`    | The description of the embed message.                                   |
| `embed_color`       | [String](#string)               | `""`    | The color of the embed message in hexadecimal format (e.g., `#FFFFFF`). |
| `embed_footer_name` | [String](#string)               | `""`    | The footer text of the embed message.                                   |
| `embed_footer_icon` | [String](#string)               | `""`    | The URL of the footer icon of the embed message.                        |
| `embed_author_name` | [String](#string)               | `""`    | The author name of the embed message.                                   |
| `embed_author_icon` | [String](#string)               | `""`    | The URL of the author icon of the embed message.                        |
| `embed_author_url`  | [String](#string)               | `""`    | The URL of the author of the embed message.                             |
| `embed_thumbnail`   | [String](#string)               | `""`    | The URL of the thumbnail image of the embed message.                    |
| `embed_image`       | [String](#string)               | `""`    | The URL of the image of the embed message.                              |
| `embed_url`         | [String](#string)               | `""`    | The URL that the embed message links to.                                |
| `embed_timestamp`   | [Boolean](#boolean)             | `true`  | Whether the embed message includes a timestamp or not.                  |
| `embed_fields`      | [MessageField](#messagefield)[] | `[]`    | A list of fields to include in the embed message.                       |

#### MessageField

| Option         | Type                | Default | Description                               |
| -------------- | ------------------- | ------- | ----------------------------------------- |
| `field_name`   | [String](#string)   | `""`    | The name of the field.                    |
| `field_value`  | [String](#string)   | `""`    | The value of the field.                   |
| `field_inline` | [Boolean](#boolean) | `false` | Whether the field is shown inline or not. |

### GameServers

A list of game servers that the bot has access to. Each game server has its own configuration options. Below is the list of options for each game server.

| Option                    | Type              | Default | Description                                                                                                                    |
| ------------------------- | ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `server_id`               | [String](#string) | `""`    | The unique identifier for the game server.                                                                                     |
| `server_name`             | [String](#string) | `""`    | The display name of the game server.                                                                                           |
| `server_type`             | [String](#string) | `""`    | The type of the game server. See all available types [here](https://github.com/gamedig/node-gamedig/blob/master/GAMES_LIST.md) |
| `server_ip`               | [String](#string) | `""`    | The IP address or domain name of the game server.                                                                              |
| `server_port`             | [Number](#number) | `0`     | The port number used by the game server.                                                                                       |
| `server_query_port`       | [Number](#number) | `0`     | The port number used for querying the game server.                                                                             |
| `server_rcon_port`        | [Number](#number) | `0`     | The port number used for RCON (Remote Console) access.                                                                         |
| `server_rcon_password`    | [String](#string) | `""`    | The password used for RCON access.                                                                                             |
| `server_tags`             | [String](#string) | `""`    | A comma-separated list of tags that describe the game server.                                                                  |
| `server_file_path`        | [String](#string) | `""`    | The file path to the game server executable. Example: "C:\Users\User\Desktop\Server\server.exe"                                |
| `server_start_file_path`  | [String](#string) | `""`    | The file path to the game server start script. Example: "C:\Users\User\Desktop\Server\start.bat"                               |
| `server_update_file_path` | [String](#string) | `""`    | The file path to the game server update script. Example: "C:\Users\User\Desktop\Server\update.bat"                             |

### CounterPanels

| Option                                | Type                | Default | Description                                                                                                           |
| ------------------------------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| `panel_id`                            | [String](#string)   | `""`    | The unique identifier for the counter panel.                                                                          |
| `panel_name`                          | [String](#string)   | `""`    | The display name of the counter panel.                                                                                |
| `panel_settings_channel_id`           | [String](#string)   | `""`    | The channel ID where the panel settings are stored. [How to get channel ID](#how-to-enable-developer-mode-in-discord) |
| `panel_settings_servers`              | [Array](#array)     | `[]`    | A list of game server IDs that are associated with the counter panel.                                                 |
| `panel_formatting_server_title`       | [String](#string)   | `""`    | The formatting template for the server title.                                                                         |
| `panel_formatting_server_description` | [String](#string)   | `""`    | The formatting template for the server description.                                                                   |
| `panel_formatting_server_inline`      | [Boolean](#boolean) | `false` | Whether the server details are shown inline or not.                                                                   |
| `panel_formatting_total_enabled`      | [Boolean](#boolean) | `true`  | Whether the total player count is shown or not.                                                                       |
| `panel_formatting_total_title`        | [String](#string)   | `""`    | The title for the total player count section.                                                                         |
| `panel_formatting_total_description`  | [String](#string)   | `""`    | The description for the total player count section.                                                                   |
| `panel_formatting_total_inline`       | [Boolean](#boolean) | `true`  | Whether the total player count is shown inline or not.                                                                |
| `panel_emojis_online`                 | [String](#string)   | `"✅"`   | The emoji used to indicate online servers.                                                                            |
| `panel_emojis_offline`                | [String](#string)   | `"❌"`   | The emoji used to indicate offline servers.                                                                           |
| `panel_emojis_locked`                 | [String](#string)   | `"🔒"`   | The emoji used to indicate locked servers.                                                                            |
| `panel_message_title`                 | [String](#string)   | `""`    | The title of the panel message.                                                                                       |
| `panel_message_description`           | [String](#string)   | `""`    | The description of the panel message.                                                                                 |
| `panel_message_thumbnail`             | [String](#string)   | `""`    | The URL of the thumbnail image for the panel message.                                                                 |
| `panel_message_image`                 | [String](#string)   | `""`    | The URL of the image for the panel message.                                                                           |
| `panel_message_color`                 | [String](#string)   | `""`    | The color of the panel message in hexadecimal format (e.g., `#FFFFFF`).                                               |
| `panel_message_footer_name`           | [String](#string)   | `""`    | The footer text of the panel message.                                                                                 |
| `panel_message_footer_icon`           | [String](#string)   | `""`    | The URL of the footer icon for the panel message.                                                                     |
| `panel_message_author_name`           | [String](#string)   | `""`    | The author name of the panel message.                                                                                 |
| `panel_message_author_icon`           | [String](#string)   | `""`    | The URL of the author icon for the panel message.                                                                     |
| `panel_message_author_url`            | [String](#string)   | `""`    | The URL of the author of the panel message.                                                                           |
| `panel_message_content`               | [String](#string)   | `""`    | The content of the panel message.                                                                                     |
| `panel_message_url`                   | [String](#string)   | `""`    | The URL that the panel message links to.                                                                              |
| `panel_message_timestamp`             | [Boolean](#boolean) | `true`  | Whether the panel message includes a timestamp or not.                                                                |

### CounterChannels

| Option                     | Type              | Default | Description                                                                                                             |
| -------------------------- | ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `channel_id`               | [String](#string) | `""`    | The unique identifier for the counter channel.                                                                          |
| `channel_name`             | [String](#string) | `""`    | The display name of the counter channel.                                                                                |
| `channel_settings_servers` | [Array](#array)   | `[]`    | A list of game server IDs that are associated with the counter channel.                                                 |
| `channel_settings_channel` | [String](#string) | `""`    | The channel ID where the channel settings are stored. [How to get channel ID](#how-to-enable-developer-mode-in-discord) |
| `channel_settings_name`    | [String](#string) | `""`    | The formatting template for the channel name.                                                                           |
| `channel_emojis_online`    | [String](#string) | `"✅"`   | The emoji used to indicate online servers.                                                                              |
| `channel_emojis_offline`   | [String](#string) | `"❌"`   | The emoji used to indicate offline servers.                                                                             |
| `channel_emojis_locked`    | [String](#string) | `"🔒"`   | The emoji used to indicate locked servers.                                                                              |

### CounterBots

| Option                  | Type              | Default | Description                                                                                                  |
| ----------------------- | ----------------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `bot_id`                | [String](#string) | `""`    | The unique identifier for the counter bot.                                                                   |
| `bot_name`              | [String](#string) | `""`    | The display name of the counter bot.                                                                         |
| `bot_settings_token`    | [String](#string) | `""`    | The token used to authenticate the counter bot.                                                              |
| `bot_settings_servers`  | [Array](#array)   | `[]`    | A list of game server IDs that are associated with the counter bot.                                          |
| `bot_presence_username` | [String](#string) | `""`    | The username displayed for the counter bot.                                                                  |
| `bot_presence_type`     | [String](#string) | `""`    | The presence type of the counter bot. Available options are `Playing`, `Listening`, `Watching`, `Streaming`. |
| `bot_presence_status`   | [String](#string) | `""`    | The status of the counter bot. Available options are `Online`, `Idle`, `Dnd`, `Invisible`.                   |
| `bot_presence_activity` | [String](#string) | `""`    | The activity text shown in the bot's status section.                                                         |
| `bot_emojis_online`     | [String](#string) | `"✅"`   | The emoji used to indicate online servers.                                                                   |
| `bot_emojis_offline`    | [String](#string) | `"❌"`   | The emoji used to indicate offline servers.                                                                  |
| `bot_emojis_locked`     | [String](#string) | `"🔒"`   | The emoji used to indicate locked servers.                                                                   |

### RconPermission

| Option                | Type              | Default | Description                                                                                                  |
| --------------------- | ----------------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `permission_id`       | [String](#string) | `""`    | The unique identifier for the role permission.                                                               |
| `permission_name`     | [String](#string) | `""`    | The display name of the role permission.                                                                     |
| `permission_role`     | [String](#string) | `""`    | The role ID associated with the permission. [(How to get role ID)](#how-to-enable-developer-mode-in-discord) |
| `permission_commands` | [Array](#array)   | `[]`    | A list of command IDs that are associated with the role permission.                                          |
| `permission_scripts`  | [Array](#array)   | `[]`    | A list of script IDs that are associated with the role permission.                                           |
| `permission_panels`   | [Array](#array)   | `[]`    | A list of panel IDs that are associated with the role permission.                                            |

### RconPanels

| Option              | Type                                    | Default | Description                                                                                                         |
| ------------------- | --------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| `panel_id`          | [String](#string)                       | `""`    | The unique identifier for the RCON panel.                                                                           |
| `panel_name`        | [String](#string)                       | `""`    | The display name of the RCON panel.                                                                                 |
| `panel_channel`     | [String](#string)                       | `""`    | The channel ID where the RCON panel is located. [(How to get channel ID)](#how-to-enable-developer-mode-in-discord) |
| `panel_server`      | [String](#string)                       | `""`    | The server ID associated with the RCON panel.                                                                       |
| `panel_title`       | [String](#string)                       | `""`    | The title of the RCON panel.                                                                                        |
| `panel_description` | [String](#string)                       | `""`    | The description of the RCON panel.                                                                                  |
| `panel_commands`    | [RconPanelCommands](#rconpanelcommands) | `[]`    | A list of commands that can be executed from the RCON panel.                                                        |

#### RconPanelCommands

| Option            | Type                                          | Default | Description                                       |
| ----------------- | --------------------------------------------- | ------- | ------------------------------------------------- |
| `command_id`      | [String](#string)                             | `""`    | The unique identifier for the RCON panel command. |
| `command_name`    | [String](#string)                             | `""`    | The display name of the RCON panel command.       |
| `command_command` | [String](#string)                             | `""`    | The command string that will be executed.         |
| `command_args`    | [RconPanelCommandArgs](#rconpanelcommandargs) | `[]`    | A list of arguments for the RCON panel command.   |

##### RconPanelCommandArgs

| Option            | Type              | Default | Description                                                |
| ----------------- | ----------------- | ------- | ---------------------------------------------------------- |
| `arg_id`          | [String](#string) | `""`    | The unique identifier for the RCON panel command argument. |
| `arg_name`        | [String](#string) | `""`    | The display name of the RCON panel command argument.       |
| `arg_placeholder` | [String](#string) | `""`    | The placeholder text for the RCON panel command argument.  |

### RconScripts

| Option            | Type                                      | Default | Description                                          |
| ----------------- | ----------------------------------------- | ------- | ---------------------------------------------------- |
| `script_id`       | [String](#string)                         | `""`    | The unique identifier for the RCON script.           |
| `script_name`     | [String](#string)                         | `""`    | The display name of the RCON script.                 |
| `script_commands` | [RconScriptCommands](#rconscriptcommands) | `[]`    | A list of commands that are part of the RCON script. |

#### RconScriptCommands

| Option            | Type              | Default | Description                                                     |
| ----------------- | ----------------- | ------- | --------------------------------------------------------------- |
| `command_id`      | [String](#string) | `""`    | The unique identifier for the RCON script command.              |
| `command_command` | [String](#string) | `""`    | The command string that will be executed as part of the script. |

### RconTimedCommands

| Option         | Type              | Default | Description                                       |
| -------------- | ----------------- | ------- | ------------------------------------------------- |
| `command_id`   | [String](#string) | `""`    | The unique identifier for the timed RCON command. |
| `command_name` | [String](#string) | `""`    | The display name of the timed RCON command.       |

### ControllerPanels

| Option              | Type              | Default | Description                                                                                                                      |
| ------------------- | ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `panel_id`          | [String](#string) | `""`    | The unique identifier for the controller panel. This is used to distinguish between different panels.                            |
| `panel_name`        | [String](#string) | `""`    | The display name of the controller panel. This is shown in the user interface.                                                   |
| `panel_server`      | [String](#string) | `""`    | The server ID associated with the controller panel. This links the panel to a specific server.                                   |
| `panel_channel`     | [String](#string) | `""`    | The channel ID where the controller panel messages are sent. [(How to get channel ID)](#how-to-enable-developer-mode-in-discord) |
| `panel_title`       | [String](#string) | `""`    | The title of the controller panel. This is displayed at the top of the panel.                                                    |
| `panel_description` | [String](#string) | `""`    | A brief description of the controller panel. This provides context or instructions for users.                                    |

### ShopRoles

| Option                 | Type              | Default | Description                                                                                                           |
| ---------------------- | ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| `role_id`              | [String](#string) | `""`    | The unique identifier for the shop role. This is used to manage permissions and access.                               |
| `role_name`            | [String](#string) | `""`    | The display name of the shop role. This is shown in the user interface.                                               |
| `role_role_id`         | [String](#string) | `""`    | The Discord role ID associated with the shop role. [(How to get role ID)](#how-to-enable-developer-mode-in-discord)   |
| `role_daily_addition`  | [Number](#number) | `0`     | The number of points added daily to users with this role. This incentivizes daily activity.                           |
| `role_reward_addition` | [Number](#number) | `0`     | The number of points added as a reward for users with this role. This is used for special achievements or milestones. |

### ShopCategories

| Option                 | Type                      | Default | Description                                                                                    |
| ---------------------- | ------------------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `category_id`          | [String](#string)         | `""`    | The unique identifier for the shop category. This is used to manage and organize categories.   |
| `category_name`        | [String](#string)         | `""`    | The display name of the shop category. This is shown in the user interface.                    |
| `category_title`       | [String](#string)         | `""`    | The title of the shop category. This is displayed at the top of the category section.          |
| `category_description` | [String](#string)         | `""`    | A brief description of the shop category. This provides context or details about the category. |
| `category_color`       | [String](#string)         | `""`    | The color code for the shop category. This is used for visual distinction.                     |
| `category_items`       | [ShopItems](#shopitems)[] | `[]`    | A list of items included in the shop category. This organizes items under the category.        |

#### ShopItems

| Option                    | Type                | Default | Description                                                                                                                      |
| ------------------------- | ------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `item_id`                 | [String](#string)   | `""`    | The unique identifier for the shop item. This is used to manage and reference the item.                                          |
| `item_name`               | [String](#string)   | `""`    | The display name of the shop item. This is shown in the user interface.                                                          |
| `item_price`              | [Number](#number)   | `0`     | The price of the shop item. This determines how many points are needed to purchase the item.                                     |
| `item_image`              | [String](#string)   | `""`    | The URL of the image representing the shop item. This is used for visual representation.                                         |
| `item_enabled`            | [Boolean](#boolean) | `true`  | Whether the shop item is available for purchase. This allows items to be temporarily disabled.                                   |
| `item_exclusive_role_ids` | [String](#string)[] | `[]`    | A list of role IDs that have exclusive access to the shop item. [(How to get role ID)](#how-to-enable-developer-mode-in-discord) |
| `item_display_channel_id` | [String](#string)   | `""`    | The channel ID where the shop item is displayed. [(How to get channel ID)](#how-to-enable-developer-mode-in-discord)             |
| `item_description`        | [String](#string)   | `""`    | A brief description of the shop item. This provides details or context about the item.                                           |
| `item_commands`           | [String](#string)[] | `[]`    | A list of commands associated with the shop item. This allows for additional functionality or actions related to the item.       |

### ShopKits

| Option                   | Type                | Default | Description                                                                                                                     |
| ------------------------ | ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `kit_id`                 | [String](#string)   | `""`    | The unique identifier for the shop kit. This is used to manage and reference the kit.                                           |
| `kit_name`               | [String](#string)   | `""`    | The display name of the shop kit. This is shown in the user interface.                                                          |
| `kit_enabled`            | [Boolean](#boolean) | `true`  | Whether the shop kit is available for purchase. This allows kits to be temporarily disabled.                                    |
| `kit_price`              | [Number](#number)   | `0`     | The price of the shop kit. This determines how many points are needed to purchase the kit.                                      |
| `kit_image`              | [String](#string)   | `""`    | The URL of the image representing the shop kit. This is used for visual representation.                                         |
| `kit_default_amount`     | [Number](#number)   | `1`     | The default amount of items included in the shop kit. This sets the quantity for the kit.                                       |
| `kit_exclusive_role_ids` | [String](#string)[] | `[]`    | A list of role IDs that have exclusive access to the shop kit. [(How to get role ID)](#how-to-enable-developer-mode-in-discord) |
| `kit_display_channel_id` | [String](#string)   | `""`    | The channel ID where the shop kit is displayed. [(How to get channel ID)](#how-to-enable-developer-mode-in-discord)             |
| `kit_description`        | [String](#string)   | `""`    | A brief description of the shop kit. This provides details or context about the kit.                                            |
| `kit_commands`           | [String](#string)[] | `[]`    | A list of commands associated with the shop kit. This allows for additional functionality or actions related to the kit.        |

### StatsPages

| Option                     | Type                | Default | Description                                                                                                  |
| -------------------------- | ------------------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `page_id`                  | [String](#string)   | `""`    | The unique identifier for the stats page. This is used to manage and reference the page.                     |
| `page_name`                | [String](#string)   | `""`    | The display name of the stats page. This is shown in the user interface.                                     |
| `page_message_title`       | [String](#string)   | `""`    | The title of the stats page message. This is displayed at the top of the message.                            |
| `page_message_description` | [String](#string)   | `""`    | A brief description of the stats page message. This provides context or details about the stats.             |
| `page_message_thumbnail`   | [String](#string)   | `""`    | The URL of the thumbnail image for the stats page message. This is used for visual representation.           |
| `page_message_timestamp`   | [Boolean](#boolean) | `true`  | Whether the stats page message includes a timestamp or not. This indicates when the stats were last updated. |
| `page_message_footer`      | [String](#string)   | `""`    | The footer text of the stats page message. This provides additional context or information.                  |
| `page_message_color`       | [String](#string)   | `""`    | The color code for the stats page message. This is used for visual distinction.                              |
| `page_stats`               | [Stat](#stat)[]     | `[]`    | A list of stats included in the stats page. This organizes and displays various statistics.                  |

#### Stat

| Option        | Type                | Default | Description                                                                                                 |
| ------------- | ------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `stat_id`     | [String](#string)   | `""`    | The unique identifier for the stat. This is used to manage and reference the stat.                          |
| `stat_name`   | [String](#string)   | `""`    | The display name of the stat. This is shown in the user interface.                                          |
| `stat_value`  | [String](#string)   | `""`    | The value of the stat. This represents the actual data or metric.                                           |
| `stat_path`   | [String](#string)   | `""`    | The path to the stat in the database or data source. This is used to retrieve the stat value.               |
| `stat_inline` | [Boolean](#boolean) | `false` | Whether the stat is displayed inline with other stats or not.                                               |
| `stat_chars`  | [Number](#number)   | `0`     | The maximum number of characters allowed for the stat value. This limits the length of the displayed value. |

### StatsLeaderboard

| Option                               | Type                                  | Default | Description                                                                                                                                      |
| ------------------------------------ | ------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `leaderboard_id`                     | [String](#string)                     | `""`    | The leaderboard ID of the leaderboard. This is used to identify the leaderboard.                                                                 |
| `leaderboard_name`                   | [String](#string)                     | `""`    | The name of the leaderboard. This is used to identify the leaderboard.                                                                           |
| `leaderboard_message`                | [String](#string)                     | `""`    | The message of the leaderboard. This is used to identify the leaderboard.                                                                        |
| `leaderboard_channel_id`             | [String](#string)                     | `""`    | The channel ID of the leaderboard. This is used to identify the leaderboard. [(How to get channel ID)](#how-to-enable-developer-mode-in-discord) |
| `leaderboard_grouped`                | [Boolean](#boolean)                   | `false` | Wether the leaderboard is grouped or not.                                                                                                        |
| `leaderboard_formatting_count`       | [String](#string)                     | `""`    | The formatting of the count.                                                                                                                     |
| `leaderboard_formatting_inline`      | [Boolean](#boolean)                   | `false` | Wether the leaderboard is shown inline or not.                                                                                                   |
| `leaderboard_formatting_shorten`     | [Boolean](#boolean)                   | `false` | Wether the leaderboard stats are shortened or not. Example: `1000000` -> `1M`.                                                                   |
| `leaderboard_formatting_localized`   | [Boolean](#boolean)                   | `false` | Wether the leaderboard stats are localized or not. Example: `1000000` -> `1,000,000`.                                                            |
| `leaderboard_formatting_type`        | [String](#string)                     | `""`    | The type of the leaderboard formatting. Available options are `fields`, `table` or `raw`.                                                        |
| `leaderboard_formatting_table_style` | [String](#string)                     | `""`    | The style of the leaderboard table. See full list of styles [here](https://www.npmjs.com/package/ascii-table3#styles)                            |
| `leaderboard_formatting_fields`      | [String](#string)                     | `""`    | The formatting of the fields.                                                                                                                    |
| `leaderboard_formatting_table`       | [String](#string)                     | `""`    | The formatting of the table.                                                                                                                     |
| `leaderboard_dbpath_player_name`     | [String](#string)                     | `""`    | The database path of the player name.                                                                                                            |
| `leaderboard_dbpath_group_name`      | [String](#string)                     | `""`    | The database path of the group name.                                                                                                             |
| `leaderboard_message_title`          | [String](#string)                     | `""`    | The title of the leaderboard message.                                                                                                            |
| `leaderboard_message_description`    | [String](#string)                     | `""`    | The description of the leaderboard message.                                                                                                      |
| `leaderboard_message_thumbnail`      | [String](#string)                     | `""`    | The thumbnail of the leaderboard message.                                                                                                        |
| `leaderboard_message_timestamp`      | [Boolean](#boolean)                   | `true`  | Wether the leaderboard message has a timestamp or not.                                                                                           |
| `leaderboard_message_footer`         | [String](#string)                     | `""`    | The footer of the leaderboard message.                                                                                                           |
| `leaderboard_message_color`          | [String](#string)                     | `""`    | The color of the leaderboard message.                                                                                                            |
| `leaderboard_stats`                  | [LeaderboardStat](#leaderboardstat)[] | `[]`    | A list of stats.                                                                                                                                 |

#### LeaderboardStat

| Option         | Type    | Default | Description                                                                                                 |
| -------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `stat_id`      | String  | `""`    | The unique identifier for the stat. This is used to manage and reference the stat.                          |
| `stat_name`    | String  | `""`    | The display name of the stat. This is shown in the user interface.                                          |
| `stat_value`   | String  | `""`    | The value of the stat. This represents the actual data or metric.                                           |
| `stat_path`    | String  | `""`    | The path to the stat in the database or data source. This is used to retrieve the stat value.               |
| `stat_primary` | Boolean | `false` | Whether the leaderboard will be sorted by this stat.                                                        |
| `stat_chars`   | Number  | `100`   | The maximum number of characters allowed for the stat value. This limits the length of the displayed value. |

### StatsDatabase

| Option              | Type                              | Default | Description                                                                                |
| ------------------- | --------------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `database_id`       | [String](#string)                 | `""`    | The unique identifier for the database. This is used to manage and reference the database. |
| `database_name`     | [String](#string)                 | `""`    | The display name of the database. This is shown in the user interface.                     |
| `database_host`     | [String](#string)                 | `""`    | The host address of the database. This is used to connect to the database.                 |
| `database_user`     | [String](#string)                 | `""`    | The username for accessing the database. This is used for authentication.                  |
| `database_port`     | [Number](#number)                 | `0`     | The port number used to connect to the database.                                           |
| `database_password` | [String](#string)                 | `""`    | The password for accessing the database. This is used for authentication.                  |
| `database_database` | [String](#string)                 | `""`    | The name of the database. This specifies which database to connect to.                     |
| `database_tables`   | [DatabaseTable](#databasetable)[] | `[]`    | A list of tables included in the database. This organizes and references various tables.   |

#### DatabaseTable

| Option            | Type              | Default | Description                                                                                              |
| ----------------- | ----------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `table_id`        | [String](#string) | `""`    | The unique identifier for the table. This is used to manage and reference the table.                     |
| `table_name`      | [String](#string) | `""`    | The display name of the table. This is shown in the user interface.                                      |
| `table_id_column` | [String](#string) | `""`    | The column used as the unique identifier for rows in the table. This is used to reference specific rows. |

### UtilityResponder

| Option                  | Type                                             | Default | Description                                                                                                                    |
| ----------------------- | ------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `responder_id`          | [String](#string)                                | `""`    | The unique identifier for the utility responder. This is used to manage and reference the responder.                           |
| `responder_name`        | [String](#string)                                | `""`    | The display name of the utility responder. This is shown in the user interface.                                                |
| `responder_enabled`     | [Boolean](#boolean)                              | `true`  | Whether the utility responder is enabled or not. This allows the responder to be temporarily disabled.                         |
| `responder_triggers`    | [String](#string)[]                              | `[]`    | A list of triggers that will activate the utility responder. This defines the conditions under which the responder is invoked. |
| `responder_strict`      | [Boolean](#boolean)                              | `false` | Whether the utility responder operates in strict mode or not. This affects how the responder matches triggers.                 |
| `responder_content`     | [String](#string)                                | `""`    | The content of the utility responder. This is the message or action performed by the responder.                                |
| `responder_title`       | [String](#string)                                | `""`    | The title of the utility responder. This is displayed at the top of the responder message.                                     |
| `responder_description` | [String](#string)                                | `""`    | A brief description of the utility responder. This provides context or details about the responder.                            |
| `responder_footer_text` | [String](#string)                                | `""`    | The footer text of the utility responder. This provides additional context or information.                                     |
| `responder_footer_icon` | [String](#string)                                | `""`    | The URL of the footer icon for the utility responder. This is used for visual representation.                                  |
| `responder_author_name` | [String](#string)                                | `""`    | The author name of the utility responder. This is shown in the user interface.                                                 |
| `responder_author_icon` | [String](#string)                                | `""`    | The URL of the author icon for the utility responder. This is used for visual representation.                                  |
| `responder_timestamp`   | [Boolean](#boolean)                              | `true`  | Whether the utility responder includes a timestamp or not. This indicates when the responder was last updated.                 |
| `responder_thumbnail`   | [String](#string)                                | `""`    | The URL of the thumbnail image for the utility responder. This is used for visual representation.                              |
| `responder_image`       | [String](#string)                                | `""`    | The URL of the image for the utility responder. This is used for visual representation.                                        |
| `responder_color`       | [String](#string)                                | `""`    | The color code for the utility responder. This is used for visual distinction.                                                 |
| `responder_url`         | [String](#string)                                | `""`    | The URL associated with the utility responder. This provides a link for additional information or actions.                     |
| `responder_fields`      | [UtilityResponderField](#utilityembedderfield)[] | `[]`    | A list of fields included in the utility responder. This organizes and displays various pieces of information.                 |

#### UtilityResponderField

| Option         | Type                | Default | Description                                                             |
| -------------- | ------------------- | ------- | ----------------------------------------------------------------------- |
| `field_name`   | [String](#string)   | `""`    | The name of the field. This is used to identify the field.              |
| `field_value`  | [String](#string)   | `""`    | The value of the field. This represents the actual data or information. |
| `field_inline` | [Boolean](#boolean) | `false` | Whether the field is displayed inline with other fields or not.         |

### UtilityEmbedder

| Option              | Type                                            | Default | Description                                                                                                   |
| ------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| `embed_id`          | [String](#string)                               | `""`    | The unique identifier for the utility embedder. This is used to manage and reference the embedder.            |
| `embed_name`        | [String](#string)                               | `""`    | The display name of the utility embedder. This is shown in the user interface.                                |
| `embed_enabled`     | [Boolean](#boolean)                             | `true`  | Whether the utility embedder is enabled or not. This allows the embedder to be temporarily disabled.          |
| `embed_channel`     | [String](#string)                               | `""`    | The channel ID where the utility embedder messages are sent. (How to get channel ID)                          |
| `embed_content`     | [String](#string)                               | `""`    | The content of the utility embedder. This is the message or action performed by the embedder.                 |
| `embed_title`       | [String](#string)                               | `""`    | The title of the utility embedder. This is displayed at the top of the embedder message.                      |
| `embed_description` | [String](#string)                               | `""`    | A brief description of the utility embedder. This provides context or details about the embedder.             |
| `embed_footer_text` | [String](#string)                               | `""`    | The footer text of the utility embedder. This provides additional context or information.                     |
| `embed_footer_icon` | [String](#string)                               | `""`    | The URL of the footer icon for the utility embedder. This is used for visual representation.                  |
| `embed_author_name` | [String](#string)                               | `""`    | The author name of the utility embedder. This is shown in the user interface.                                 |
| `embed_author_icon` | [String](#string)                               | `""`    | The URL of the author icon for the utility embedder. This is used for visual representation.                  |
| `embed_timestamp`   | [Boolean](#boolean)                             | `true`  | Whether the utility embedder includes a timestamp or not. This indicates when the embedder was last updated.  |
| `embed_thumbnail`   | [String](#string)                               | `""`    | The URL of the thumbnail image for the utility embedder. This is used for visual representation.              |
| `embed_image`       | [String](#string)                               | `""`    | The URL of the image for the utility embedder. This is used for visual representation.                        |
| `embed_color`       | [String](#string)                               | `""`    | The color code for the utility embedder. This is used for visual distinction.                                 |
| `embed_url`         | [String](#string)                               | `""`    | The URL associated with the utility embedder. This provides a link for additional information or actions.     |
| `embed_fields`      | [UtilityEmbedderField](#utilityembedderfield)[] | `[]`    | A list of fields included in the utility embedder. This organizes and displays various pieces of information. |

#### UtilityEmbedderField

| Option         | Type                | Default | Description                                                             |
| -------------- | ------------------- | ------- | ----------------------------------------------------------------------- |
| `field_name`   | [String](#string)   | `""`    | The name of the field. This is used to identify the field.              |
| `field_value`  | [String](#string)   | `""`    | The value of the field. This represents the actual data or information. |
| `field_inline` | [Boolean](#boolean) | `false` | Whether the field is displayed inline with other fields or not.         |

### CommanderPanels

| Option                        | Type                                            | Default | Description                                                                                                        |
| ----------------------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `panel_id`                    | [String](#string)                               | `""`    | The unique identifier for the commander panel. This is used to manage and reference the panel.                     |
| `panel_name`                  | [String](#string)                               | `""`    | The display name of the commander panel. This is shown in the user interface.                                      |
| `panel_channel_id`            | [String](#string)                               | `""`    | The channel ID where the commander panel messages are sent. (How to get channel ID)                                |
| `panel_message_content`       | [String](#string)                               | `""`    | The content of the commander panel message. This is the message or action performed by the panel.                  |
| `panel_message_title`         | [String](#string)                               | `""`    | The title of the commander panel message. This is displayed at the top of the message.                             |
| `panel_message_description`   | [String](#string)                               | `""`    | A brief description of the commander panel message. This provides context or details about the panel.              |
| `panel_message_thumbnail`     | [String](#string)                               | `""`    | The URL of the thumbnail image for the commander panel message. This is used for visual representation.            |
| `panel_message_image`         | [String](#string)                               | `""`    | The URL of the image for the commander panel message. This is used for visual representation.                      |
| `panel_message_color`         | [String](#string)                               | `""`    | The color code for the commander panel message. This is used for visual distinction.                               |
| `panel_message_footer_name`   | [String](#string)                               | `""`    | The footer text of the commander panel message. This provides additional context or information.                   |
| `panel_message_footer_icon`   | [String](#string)                               | `""`    | The URL of the footer icon for the commander panel message. This is used for visual representation.                |
| `panel_message_author_name`   | [String](#string)                               | `""`    | The author name of the commander panel message. This is shown in the user interface.                               |
| `panel_message_author_icon`   | [String](#string)                               | `""`    | The URL of the author icon for the commander panel message. This is used for visual representation.                |
| `panel_message_author_url`    | [String](#string)                               | `""`    | The URL of the author for the commander panel message. This provides a link for additional information or actions. |
| `panel_message_timestamp`     | [Boolean](#boolean)                             | `true`  | Whether the commander panel message includes a timestamp or not. This indicates when the panel was last updated.   |
| `panel_response_not_linked`   | [String](#string)                               | `""`    | The response message when the user is not linked. This provides feedback to the user.                              |
| `panel_button_link_enabled`   | [Boolean](#boolean)                             | `true`  | Whether the link button is enabled or not. This allows the button to be temporarily disabled.                      |
| `panel_button_link_style`     | [String](#string)                               | `""`    | The style of the link button. This defines the visual appearance of the button.                                    |
| `panel_button_link_emoji`     | [String](#string)                               | `""`    | The emoji displayed on the link button. This adds a visual icon to the button.                                     |
| `panel_button_link_label`     | [String](#string)                               | `""`    | The label text of the link button. This is shown on the button.                                                    |
| `panel_button_link_response`  | [String](#string)                               | `""`    | The response message when the link button is clicked. This provides feedback to the user.                          |
| `panel_button_link_type`      | [String](#string)                               | `""`    | The type of the link button. This defines the button's functionality.                                              |
| `panel_button_kickme_enabled` | [Boolean](#boolean)                             | `true`  | Whether the kickme button is enabled or not. This allows the button to be temporarily disabled.                    |
| `panel_button_kickme_style`   | [String](#string)                               | `""`    | The style of the kickme button. This defines the visual appearance of the button.                                  |
| `panel_button_kickme_emoji`   | [String](#string)                               | `""`    | The emoji displayed on the kickme button. This adds a visual icon to the button.                                   |
| `panel_button_kickme_label`   | [String](#string)                               | `""`    | The label text of the kickme button. This is shown on the button.                                                  |
| `panel_button_info_enabled`   | [Boolean](#boolean)                             | `true`  | Whether the info button is enabled or not. This allows the button to be temporarily disabled.                      |
| `panel_button_info_style`     | [String](#string)                               | `""`    | The style of the info button. This defines the visual appearance of the button.                                    |
| `panel_button_info_emoji`     | [String](#string)                               | `""`    | The emoji displayed on the info button. This adds a visual icon to the button.                                     |
| `panel_button_info_label`     | [String](#string)                               | `""`    | The label text of the info button. This is shown on the button.                                                    |
| `panel_custom_buttons`        | [CommanderPanelButton](#commanderpanelbutton)[] | `[]`    | A list of custom buttons included in the commander panel. This allows for additional functionality or actions.     |
|                               |

#### CommanderPanelButton

| Option                     | Type                | Default | Description                                                                                                                                                         |
| -------------------------- | ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `button_id`                | [String](#string)   | `""`    | The unique identifier for the button. This is used to manage and reference the button.                                                                              |
| `button_name`              | [String](#string)   | `""`    | The display name of the button. This is shown in the user interface.                                                                                                |
| `button_enabled`           | [Boolean](#boolean) | `true`  | Whether the button is enabled or not. This allows the button to be temporarily disabled.                                                                            |
| `button_style`             | [String](#string)   | `""`    | The style of the button. This defines the visual appearance of the button.                                                                                          |
| `button_label`             | [String](#string)   | `""`    | The label text of the button. This is shown on the button.                                                                                                          |
| `button_emoji`             | [String](#string)   | `""`    | The emoji displayed on the button. This adds a visual icon to the button.                                                                                           |
| `button_command`           | [String](#string)   | `""`    | The command executed by the button. This defines the button's functionality.                                                                                        |
| `button_response`          | [String](#string)   | `""`    | The response message when the button is clicked. This provides feedback to the user.                                                                                |
| `button_required_role_ids` | [String](#string)[] | `[]`    | A list of role IDs required to use the button. This restricts access to users with specific roles. [(How to get role ID)](#how-to-enable-developer-mode-in-discord) |
| `button_cooldown_hours`    | [Number](#number)   | `0`     | The cooldown period in hours for the button. This limits how frequently the button can be used.                                                                     |


## Common Questions

### How to enable developer mode in Discord?

1. Open Discord and click on the `User Settings` icon.
2. Scroll down to the `Appearance` section.
3. Toggle the `Developer Mode` switch to enable it.
4. Now you can right-click on any user, server, or channel to copy their ID.


