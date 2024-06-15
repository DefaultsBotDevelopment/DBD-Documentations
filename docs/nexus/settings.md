---
sidebar_position: 4
---

# Local Settings

## Introduction

DBD Nexus provides a simple and intuitive interface to manage your DBD modules, but sometimes you just want to configure your settings locally without using the web interface. This is where the local settings come in. Local settings allow you to configure your bot's settings without using the web interface. You can configure your bot's settings by creating the `settings.json` file in the daemon's directory.

## Setting up Local Settings

To setup local settings you must first start the daemon one trough the web interface. After the bot has been started at least once from the web dashboard you can add the `settings.json` file to the daemon's directory. The `settings.json` file should be placed in the same directory as the daemon files.

After you have created the `settings.json` file you can start editing the settings. When you start the daemon it will now also run the bot on startup with the settings you have configured in the `settings.json` file. This allows you to configure your bot without using the web interface to start or stop the bot.

:::warning
Make sure to follow the docs properly when editing the `settings.json` file. Incorrect settings can cause the bot to not start or function properly. If you are unexperienced with json files or configuration files we recommend using the web interface to configure your bot.
:::

:::note
Please understand that this feature is introduced for advanced users and is not recommended for users that are not familiar with configuration files.
:::

Here is an example of a `settings.json` file with the default settings:

```json
{
	"general_credentials_token": "",
	"general_credentials_guild": "",
	"general_presence_username": "",
	"general_presence_type": "",
	"general_presence_status": "",
	"general_presence_activity": "",
	"general_gameservers": [],
	"linker_steamdb_enabled": false,
	"linker_steamdb_host": "",
	"linker_steamdb_user": "",
	"linker_steamdb_port": "",
	"linker_steamdb_password": "",
	"linker_steamdb_database": "",
	"linker_steamdb_table": "",
	"linker_steamdb_column_code": "",
	"linker_steamdb_column_discordid": "",
	"linker_steamdb_column_steamid": "",
	"linker_epicdb_enabled": false,
	"linker_epicdb_host": "",
	"linker_epicdb_user": "",
	"linker_epicdb_port": "",
	"linker_epicdb_password": "",
	"linker_epicdb_database": "",
	"linker_epicdb_table": "",
	"linker_epicdb_column_code": "",
	"linker_epicdb_column_discordid": "",
	"linker_epicdb_column_epicid": "",
	"linker_steamdb_embed": {},
	"linker_steamdb_error": {},
	"linker_epicdb_embed": {},
	"linker_epicdb_error": {},
	"playercounter_enabled": true,
	"playercounter_general_update_interval": 300,
	"playercounter_panels": [],
	"playercounter_channels": [],
	"playercounter_bots": [],
	"controller_enabled": true,
	"controller_allowed_roles": [],
	"controller_panels": [],
	"rcon_enabled": true,
	"rcon_full_access": [],
	"rcon_log_channel": "",
	"rcon_permissions": [],
	"rcon_timed_commands": [],
	"rcon_panels": [],
	"rcon_scripts": []
}
```

## Settings Rules

Below you can find the rules for each setting in the `settings.json` file. Any invalid settings can cause the bot to not start or function properly.

### General Settings

| Setting                     | Type   | Default | Info                                                      |
| --------------------------- | ------ | ------- | --------------------------------------------------------- |
| `general_credentials_token` | string | `""`    | The bot token that is used to login to Discord.           |
| `general_credentials_guild` | string | `""`    | The guild ID where the bot should be active.              |
| `general_presence_username` | string | `""`    | The bot's username.                                       |
| `general_presence_type`     | string | `""`    | Allowed: `Playing`, `Streaming`, `Listening`, `Watching`. |
| `general_presence_status`   | string | `""`    | Allowed: `online`, `idle`, `dnd`, `invisible`.            |
| `general_presence_activity` | string | `""`    | The activity the bot should display.                      |
| `general_gameservers`       | array  | `[]`    | See [GameServers Settings](#gameservers-settings).        |

#### GameServers Settings

| Setting                   | Type   | Default | Info                                                                                           |
| ------------------------- | ------ | ------- | ---------------------------------------------------------------------------------------------- |
| `server_id`               | string | `""`    | This must be a random and unique value!                                                        |
| `server_name`             | string | `""`    | The name of the gameserver.                                                                    |
| `server_ip`               | string | `""`    | The IP of the gameserver.                                                                      |
| `server_port`             | number | `0`     | The port of the gameserver.                                                                    |
| `server_query_port`       | number | `0`     | The query port of the gameserver.                                                              |
| `server_rcon_port`        | number | `0`     | The rcon port of the gameserver.                                                               |
| `server_type`             | string | `""`    | Must be a id from [GameDig](https://github.com/gamedig/node-gamedig/blob/master/GAMES_LIST.md) |
| `server_tags`             | string | `""`    | The tags of the gameserver. (comma separated)                                                  |
| `server_file_path`        | string | `""`    | The main file of the game server. (most times a exe file)                                      |
| `server_start_file_path`  | string | `""`    | The start file of the game server.                                                             |
| `server_update_file_path` | string | `""`    | The update file of the game server.                                                            |

### Linker Settings

| Setting                           | Type    | Default | Info                                                               |
| --------------------------------- | ------- | ------- | ------------------------------------------------------------------ |
| `linker_steamdb_enabled`          | boolean | `false` | Enable the SteamDB Linker.                                         |
| `linker_steamdb_host`             | string  | `""`    | The host of the SteamDB database.                                  |
| `linker_steamdb_user`             | string  | `""`    | The user of the SteamDB database.                                  |
| `linker_steamdb_port`             | string  | `""`    | The port of the SteamDB database.                                  |
| `linker_steamdb_password`         | string  | `""`    | The password of the SteamDB database.                              |
| `linker_steamdb_database`         | string  | `""`    | The database of the SteamDB database.                              |
| `linker_steamdb_table`            | string  | `""`    | The table of the SteamDB database.                                 |
| `linker_steamdb_column_code`      | string  | `""`    | The column of the SteamDB database where the code is stored.       |
| `linker_steamdb_column_discordid` | string  | `""`    | The column of the SteamDB database where the discord id is stored. |
| `linker_steamdb_column_steamid`   | string  | `""`    | The column of the SteamDB database where the steam id is stored.   |
| `linker_steamdb_embed`            | object  | `{}`    | See [Embed Settings](#embed-settings).                             |
| `linker_steamdb_error`            | object  | `{}`    | See [Embed Settings](#embed-settings).                             |
| `linker_epicdb_enabled`           | boolean | `false` | Enable the EpicDB Linker.                                          |
| `linker_epicdb_host`              | string  | `""`    | The host of the EpicDB database.                                   |
| `linker_epicdb_user`              | string  | `""`    | The user of the EpicDB database.                                   |
| `linker_epicdb_port`              | string  | `""`    | The port of the EpicDB database.                                   |
| `linker_epicdb_password`          | string  | `""`    | The password of the EpicDB database.                               |
| `linker_epicdb_database`          | string  | `""`    | The database of the EpicDB database.                               |
| `linker_epicdb_table`             | string  | `""`    | The table of the EpicDB database.                                  |
| `linker_epicdb_column_code`       | string  | `""`    | The column of the EpicDB database where the code is stored.        |
| `linker_epicdb_column_discordid`  | string  | `""`    | The column of the EpicDB database where the discord id is stored.  |
| `linker_epicdb_column_epicid`     | string  | `""`    | The column of the EpicDB database where the epic id is stored.     |
| `linker_epicdb_embed`             | object  | `{}`    | See [Embed Settings](#embed-settings).                             |
| `linker_epicdb_error`             | object  | `{}`    | See [Embed Settings](#embed-settings).                             |

#### Embed Settings

| Setting       | Type    | Default | Info                               |
| ------------- | ------- | ------- | ---------------------------------- |
| `title`       | string  | `""`    | The title of the embed.            |
| `description` | string  | `""`    | The description of the embed.      |
| `color`       | string  | `""`    | The color of the embed.            |
| `thumbnail`   | string  | `""`    | The thumbnail of the embed.        |
| `timestamp`   | boolean | `false` | Enable the timestamp of the embed. |
| `content`     | string  | `""`    | The un-embedded text of the embed. |

### PlayerCounter Settings

| Setting                                 | Type    | Default | Info                                                              |
| --------------------------------------- | ------- | ------- | ----------------------------------------------------------------- |
| `playercounter_enabled`                 | boolean | `true`  | Enable the PlayerCounter module.                                  |
| `playercounter_general_update_interval` | number  | `300`   | The interval in seconds in which the PlayerCounter should update. |
| `playercounter_panels`                  | array   | `[]`    | See [Panels Settings](#panels-settings).                          |
| `playercounter_channels`                | array   | `[]`    | See [Channels Settings](#channels-settings).                      |
| `playercounter_bots`                    | array   | `[]`    | See [Bots Settings](#bots-settings).                              |

#### Panels Settings

| Setting                           | Type    | Default                                                                                                      | Info                                                                          |
| --------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `panel_id`                        | string  | `""`                                                                                                         | This must be a random and unique value!                                       |
| `panel_name`                      | string  | `""`                                                                                                         | The name of the panel.                                                        |
| `panel_emojis_locked`             | string  | `"🔒"`                                                                                                       | The emojis for the locked status.                                             |
| `panel_emojis_online`             | string  | `"✅"`                                                                                                       | The emojis for the online status.                                             |
| `panel_emojis_offline`            | string  | `"❌"`                                                                                                       | The emojis for the offline status.                                            |
| `panel_settings_channel`          | string  | `""`                                                                                                         | The channel ID where the panel should be displayed.                           |
| `panel_settings_servers`          | array   | `[]`                                                                                                         | A list of game server ids from [GameServers Settings](#gameservers-settings). |
| `panel_message_title`             | string  | `""`                                                                                                         | The title of the panel message.                                               |
| `panel_message_description`       | string  | `""`                                                                                                         | The description of the panel message.                                         |
| `panel_message_color`             | string  | `"#038cb5"`                                                                                                  | The color of the panel message.                                               |
| `panel_message_timestamp`         | boolean | `false`                                                                                                      | Enable the timestamp of the panel message.                                    |
| `panel_message_footer`            | string  | `""`                                                                                                         | The footer of the panel message.                                              |
| `panel_message_footer_icon`       | string  | `""`                                                                                                         | The footer icon of the panel message.                                         |
| `panel_message_thumbnail`         | string  | `""`                                                                                                         | The thumbnail of the panel message.                                           |
| `panel_message_image`             | string  | `""`                                                                                                         | The image of the panel message.                                               |
| `panel_message_author_icon`       | string  | `""`                                                                                                         | The author icon of the panel message.                                         |
| `panel_message_author_name`       | string  | `""`                                                                                                         | The author name of the panel message.                                         |
| `panel_message_content`           | string  | `""`                                                                                                         | The content of the panel message.                                             |
| `panel_formatting_total_title`    | string  | `"🌐 Total   `{playerCount}/{maxPlayers} Playing`"`                                                          | The title of the total players field.                                         |
| `panel_formatting_total_message`  | string  | `"↳ [Link](https://www.ark-servers.net)"`                                                                    | The message of the total players field.                                       |
| `panel_formatting_total_inline`   | boolean | `false`                                                                                                      | Enable the inline of the total players field.                                 |
| `panel_formatting_server_title`   | string  | `"{statusEmoji} {locked}  {title}"`                                                                          | The title of the server players field.                                        |
| `panel_formatting_server_message` | string  | "Info: `{info}` Players: `{playerCount}/{maxPlayers}` Map: `{map}` Ping: `{ping}` {disclaimer}{playerNames}" | The message of the server players field.                                      |
| `panel_formatting_server_inline`  | boolean | `false`                                                                                                      | Enable the inline of the server players field.                                |

#### Channels Settings

| Setting                    | Type   | Default                                                       | Info                                                                          |
| -------------------------- | ------ | ------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `channel_id`               | string | `""`                                                          | This must be a random and unique value!                                       |
| `channel_name`             | string | `""`                                                          | The name of the channel.                                                      |
| `channel_settings_channel` | string | `""`                                                          | The channel ID where the channel should be displayed.                         |
| `channel_settings_servers` | array  | `[]`                                                          | A list of game server ids from [GameServers Settings](#gameservers-settings). |
| `channel_settings_name`    | string | `"{statusEmoji}{locked} Server 1 {playerCount}/{maxPlayers}"` | The name of the channel.                                                      |
| `channel_emojis_online`    | string | `"✅"`                                                        | The emojis for the online status.                                             |
| `channel_emojis_offline`   | string | `"❌"`                                                        | The emojis for the offline status.                                            |
| `channel_emojis_locked`    | string | `"🔒"`                                                        | The emojis for the locked status.                                             |

#### Bots Settings

| Setting                 | Type   | Default | Info                                                                          |
| ----------------------- | ------ | ------- | ----------------------------------------------------------------------------- |
| `bot_id`                | string | `""`    | This must be a random and unique value!                                       |
| `bot_name`              | string | `""`    | The name of the bot.                                                          |
| `bot_settings_token`    | string | `""`    | The bot token of the sub counter bot. This must be an un-used token!          |
| `bot_settings_servers`  | array  | `[]`    | A list of game server ids from [GameServers Settings](#gameservers-settings). |
| `bot_presence_username` | string | `""`    | The bot's username.                                                           |
| `bot_presence_type`     | string | `""`    | Allowed: `Playing`, `Streaming`, `Listening`, `Watching`.                     |
| `bot_presence_status`   | string | `""`    | Allowed: `online`, `idle`, `dnd`, `invisible`.                                |
| `bot_presence_activity` | string | `""`    | The activity the bot should display.                                          |
| `bot_emojis_online`     | string | `"✅"`  | The emojis for the online status.                                             |
| `bot_emojis_offline`    | string | `"❌"`  | The emojis for the offline status.                                            |
| `bot_emojis_locked`     | string | `"🔒"`  | The emojis for the locked status.                                             |

### Controller Settings

| Setting                    | Type    | Default | Info                                                           |
| -------------------------- | ------- | ------- | -------------------------------------------------------------- |
| `controller_enabled`       | boolean | `true`  | Enable the Controller module.                                  |
| `controller_allowed_roles` | array   | `[]`    | The roles that are allowed to use the controller.              |
| `controller_panels`        | array   | `[]`    | See [Controller Panels Settings](#controller-panels-settings). |

#### Controller Panels Settings

| Setting             | Type   | Default | Info                                                              |
| ------------------- | ------ | ------- | ----------------------------------------------------------------- |
| `panel_id`          | string | `""`    | This must be a random and unique value!                           |
| `panel_name`        | string | `""`    | The name of the panel.                                            |
| `panel_server`      | string | `""`    | The server id from [GameServers Settings](#gameservers-settings). |
| `panel_channel`     | string | `""`    | The channel id where the panel should be displayed.               |
| `panel_title`       | string | `""`    | The title of the panel.                                           |
| `panel_description` | string | `""`    | The description of the panel.                                     |

### Rcon Settings

| Setting               | Type    | Default | Info                                                               |
| --------------------- | ------- | ------- | ------------------------------------------------------------------ |
| `rcon_enabled`        | boolean | `true`  | Enable the Rcon module.                                            |
| `rcon_full_access`    | array   | `[]`    | The roles that have full access to the Rcon module.                |
| `rcon_log_channel`    | string  | `""`    | The channel ID where the Rcon logs should be displayed.            |
| `rcon_permissions`    | array   | `[]`    | See [Rcon Permissions Settings](#rcon-permissions-settings).       |
| `rcon_timed_commands` | array   | `[]`    | See [Rcon Timed Commands Settings](#rcon-timed-commands-settings). |
| `rcon_panels`         | array   | `[]`    | See [Rcon Panels Settings](#rcon-panels-settings).                 |
| `rcon_scripts`        | array   | `[]`    | See [Rcon Scripts Settings](#rcon-scripts-settings).               |

#### Rcon Permissions Settings

| Setting              | Type   | Default | Info                                                                       |
| -------------------- | ------ | ------- | -------------------------------------------------------------------------- |
| `permission_id`      | string | `""`    | This must be a random and unique value!                                    |
| `permission_name`    | string | `""`    | The name of the permission.                                                |
| `permission_role`    | string | `""`    | The role ID of the permission.                                             |
| `permission_scripts` | array  | `[]`    | A list of script ids from [Rcon Scripts Settings](#rcon-scripts-settings). |
| `permission_panels`  | array  | `[]`    | A list of panel ids from [Rcon Panels Settings](#rcon-panels-settings).    |

#### Rcon Timed Commands Settings

| Setting            | Type   | Default               | Info                                                 |
| ------------------ | ------ | --------------------- | ---------------------------------------------------- |
| `command_id`       | string | `""`                  | This must be a random and unique value!              |
| `command_name`     | string | `""`                  | The name of the command.                             |
| `command_interval` | string | `"0 0 0/1 1/1 * ? *"` | The interval in which the command should run.        |
| `command_tag`      | string | `""`                  | The tag of the command.                              |
| `command_commands` | array  | `[]`                  | See [Rcon Command Settings](#rcon-command-settings). |

##### Rcon Command Settings

| Setting           | Type   | Default | Info                                    |
| ----------------- | ------ | ------- | --------------------------------------- |
| `command_id`      | string | `""`    | This must be a random and unique value! |
| `command_command` | string | `""`    | The command that should be executed.    |

#### Rcon Panels Settings

| Setting             | Type   | Default | Info                                                              |
| ------------------- | ------ | ------- | ----------------------------------------------------------------- |
| `panel_id`          | string | `""`    | This must be a random and unique value!                           |
| `panel_name`        | string | `""`    | The name of the panel.                                            |
| `panel_server`      | string | `""`    | The server id from [GameServers Settings](#gameservers-settings). |
| `panel_channel`     | string | `""`    | The channel id where the panel should be displayed.               |
| `panel_title`       | string | `""`    | The title of the panel.                                           |
| `panel_description` | string | `""`    | The description of the panel.                                     |
| `panel_commands`    | array  | `[]`    | See [Rcon Command Settings](#rcon-panel-command-settings).        |

##### Rcon Panel Command Settings

| Setting           | Type   | Default | Info                                                           |
| ----------------- | ------ | ------- | -------------------------------------------------------------- |
| `command_id`      | string | `""`    | This must be a random and unique value!                        |
| `command_name`    | string | `""`    | The name of the command.                                       |
| `command_command` | string | `""`    | The command that should be executed.                           |
| `command_args`    | array  | `[]`    | See [Rcon Command Args Settings](#rcon-command-args-settings). |

###### Rcon Command Args Settings

| Setting           | Type   | Default | Info                                    |
| ----------------- | ------ | ------- | --------------------------------------- |
| `arg_id`          | string | `""`    | This must be a random and unique value! |
| `arg_name`        | string | `""`    | The name of the argument.               |
| `arg_placeholder` | string | `""`    | The placeholder of the argument.        |

#### Rcon Scripts Settings

| Setting           | Type   | Default | Info                                                        |
| ----------------- | ------ | ------- | ----------------------------------------------------------- |
| `script_id`       | string | `""`    | This must be a random and unique value!                     |
| `script_name`     | string | `""`    | The name of the script.                                     |
| `script_commands` | array  | `[]`    | See [Rcon Command Settings](#rcon-script-command-settings). |

##### Rcon Script Command Settings

| Setting           | Type   | Default | Info                                    |
| ----------------- | ------ | ------- | --------------------------------------- |
| `command_id`      | string | `""`    | This must be a random and unique value! |
| `command_command` | string | `""`    | The command that should be executed.    |
