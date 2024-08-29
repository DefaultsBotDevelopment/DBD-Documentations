---
sidebar_position: 3
---

# Configuration

DBD Nexus Bots allow 2 types of configurations: Local and Remote. Local configuration is done by editing the `config.json` file in the bot's directory. Remote configuration is done by editing the configuration page on the DBD Nexus site.

## Local Configuration

When running the bot with local configuration, you need to configure your `config.json` file inside the bot folder. This way you can run the bot without the need of configuring it through the DBD Nexus site. Below is each setting in the `config.json` file explained and documented.

:::note
This method is recommended for experienced users who are familiar with the configuration of JSON files and understand the structure of JSON configuration files. If you are new to this or not comfortable with editing JSON files, it is recommended to use the remote configuration method instead.

Make sure when configuring to use a proper text editor like [Visual Studio Code](https://code.visualstudio.com/download) to prevent any formatting issues.
:::

### Settings

| Setting                       | Type                                         | Description                                                                   |
| ----------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| general_debug                 | Boolean                                      | Enable debug mode for the bot. This will log more information to the console. |
| general_bot_token             | String                                       | The bot token for the Discord bot. This is required for the bot to function.  |
| general_credentials_guild_id  | String                                       | The Discord server ID where you want to run the bot.                          |
| general_presence_username     | String                                       | The username for the bot's presence.                                          |
| general_presence_type         | Enum                                         | The presence type for the bot. (Playing, Watching, Listening, Streaming)      |
| general_presence_status       | Enum                                         | The status for the bot's presence. (Online, Idle, DND, Invisible)             |
| general_presence_activity     | String                                       | The activity for the bot's presence.                                          |
| general_gameservers           | [GameServer](#gameserver-object)             | An array of game server configurations.                                       |
| **Linker Module**             |                                              |                                                                               |
| playercounter_enabled         | Boolean                                      | Enable the player counter module.                                             |
| playercounter_update_interval | Number                                       | The interval in seconds to update the data.                                   |
| playercounter_panels          | [CounterPanel](#counterpanel-object)         | An array of counter panel configurations.                                     |
| playercounter_channels        | [CounterChannel](#counterchannel-object)     | An array of counter channel configurations.                                   |
| playercounter_bots            | [CounterBot](#counterbot-object)             | An array of counter bot configurations.                                       |
| **Rcon Module**               |                                              |                                                                               |
| rcon_enabled                  | Boolean                                      | Enable the RCON module.                                                       |
| rcon_log_channel              | String                                       | The Discord channel ID to log RCON commands.                                  |
| rcon_full_access              | Array                                        | The Discord role IDs that have full access to the RCON commands.              |
| rcon_permissions              | [RconPermission](#rconpermission-object)     | An array of RCON permission configurations.                                   |
| rcon_panels                   | [RconPanel](#rconpanel-object)               | An array of RCON panel configurations.                                        |
| rcon_scripts                  | [RconScript](#rconscript-object)             | An array of RCON script configurations.                                       |
| rcon_timed_commands           | [RconTimedCommand](#rcontimedcommand-object) | An array of RCON timed command configurations.                                |
| **Controller Module**         |                                              |                                                                               |
| controller_enabled            | Boolean                                      | Enable the controller module.                                                 |
| controller_allowed_roles      | Array                                        | The Discord role IDs that have access to the controller commands.             |
| controller_panels             | [ControllerPanel](#controllerpanel-object)   | An array of controller panel configurations.                                  |

### Types

#### GameServer Object

The `GameServer` object is an array of game server configurations. Each game server configuration has the following settings:

| Setting                 | Type   | Description                                                                                                                                   |
| ----------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| server_id               | String | The server ID for the game server. This is used to reference the server.                                                                      |
| server_name             | String | The server name for the game server. This is used for display purposes.                                                                       |
| server_type             | Enum   | The server type for the game server. Must be an id from the [Gamedig List](https://github.com/gamedig/node-gamedig/blob/master/GAMES_LIST.md) |
| server_ip               | String | The IP address of the game server.                                                                                                            |
| server_port             | Number | The port of the game server.                                                                                                                  |
| server_query_port       | Number | The query port of the game server.                                                                                                            |
| server_rcon_port        | Number | The RCON port of the game server.                                                                                                             |
| server_rcon_password    | String | The RCON password of the game server.                                                                                                         |
| server_tags             | String | Comma separated list of tags for the game server.                                                                                             |
| server_file_path        | String | The file path of the game server. Example: C:\Users\User\Desktop\Server\server.exe                                                            |
| server_start_file_path  | String | The file path of the game server start file. Example: C:\Users\User\Desktop\Server\start.bat                                                  |
| server_update_file_path | String | The file path of the game server update file. Example: C:\Users\User\Desktop\Server\update.bat                                                |

#### CounterPanel Object

| Setting                             | Type    | Description                                                              |
| ----------------------------------- | ------- | ------------------------------------------------------------------------ |
| panel_id                            | String  | The panel ID for the counter panel. This is used to reference the panel. |
| panel_name                          | String  | The panel name for the counter panel. This is used for display purposes. |
| panel_settings_channel_id           | String  | The Discord channel ID for the counter panel.                            |
| panel_settings_servers              | Array   | An array of server IDs for the counter panel.                            |
| panel_formatting_server_title       | String  | The title format for the server in the counter panel.                    |
| panel_formatting_server_description | String  | The description format for the server in the counter panel.              |
| panel_formatting_server_inline      | Boolean | Whether to display the server inline in the counter panel.               |
| panel_formatting_total_enabled      | Boolean | Whether to display the total players in the counter panel.               |
| panel_formatting_total_title        | String  | The title format for the total players in the counter panel.             |
| panel_formatting_total_description  | String  | The description format for the total players in the counter panel.       |
| panel_formatting_total_inline       | Boolean | Whether to display the total players inline in the counter panel.        |
| panel_emojis_online                 | String  | The emoji for online players in the counter panel.                       |
| panel_emojis_offline                | String  | The emoji for offline players in the counter panel.                      |
| panel_emojis_locked                 | String  | The emoji for locked players in the counter panel.                       |
| panel_message_title                 | String  | The title for the message in the counter panel.                          |
| panel_message_description           | String  | The description for the message in the counter panel.                    |
| panel_message_thumbnail             | String  | The thumbnail for the message in the counter panel.                      |
| panel_message_image                 | String  | The image for the message in the counter panel.                          |
| panel_message_color                 | String  | The color for the message in the counter panel.                          |
| panel_message_footer_name           | String  | The footer name for the message in the counter panel.                    |
| panel_message_footer_icon           | String  | The footer icon for the message in the counter panel.                    |
| panel_message_author_name           | String  | The author name for the message in the counter panel.                    |
| panel_message_author_icon           | String  | The author icon for the message in the counter panel.                    |
| panel_message_author_url            | String  | The author URL for the message in the counter panel.                     |
| panel_message_content               | String  | The content for the message in the counter panel.                        |
| panel_message_url                   | String  | The URL for the message in the counter panel.                            |
| panel_message_timestamp             | Boolean | Whether to display the timestamp in the message in the counter panel.    |

#### CounterChannel Object

| Setting                  | Type   | Description                                                                    |
| ------------------------ | ------ | ------------------------------------------------------------------------------ |
| channel_id               | String | The channel ID for the counter channel. This is used to reference the channel. |
| channel_name             | String | The channel name for the counter channel. This is used for display purposes.   |
| channel_settings_channel | String | The Discord channel ID for the counter channel.                                |
| channel_settings_servers | Array  | An array of server IDs for the counter channel.                                |
| channel_settings_name    | String | The name format for the counter channel.                                       |
| channel_emojis_online    | String | The emoji for online players in the counter channel.                           |
| channel_emojis_offline   | String | The emoji for offline players in the counter channel.                          |
| channel_emojis_locked    | String | The emoji for locked players in the counter channel.                           |

#### CounterBot Object

| Setting               | Type   | Description                                                                  |
| --------------------- | ------ | ---------------------------------------------------------------------------- |
| bot_id                | String | The bot ID for the counter bot. This is used to reference the bot.           |
| bot_name              | String | The bot name for the counter bot. This is used for display purposes.         |
| bot_settings_token    | String | The bot token for the counter bot. This is required for the bot to function. |
| bot_settings_servers  | Array  | An array of server IDs for the counter bot.                                  |
| bot_presence_username | String | The username for the bot's presence.                                         |
| bot_presence_type     | Enum   | The presence type for the bot. (Playing, Watching, Listening, Streaming)     |
| bot_presence_status   | Enum   | The status for the bot's presence. (Online, Idle, DND, Invisible)            |
| bot_presence_activity | String | The activity for the bot's presence.                                         |
| bot_emojis_online     | String | The emoji for online players in the counter bot.                             |
| bot_emojis_offline    | String | The emoji for offline players in the counter bot.                            |
| bot_emojis_locked     | String | The emoji for locked players in the counter bot.                             |

#### RconPermission Object

| Setting             | Type   | Description                                                                          |
| ------------------- | ------ | ------------------------------------------------------------------------------------ |
| permission_id       | String | The permission ID for the RCON permission. This is used to reference the permission. |
| permission_name     | String | The permission name for the RCON permission. This is used for display purposes.      |
| permission_role     | String | The Discord role ID for the RCON permission.                                         |
| permission_commands | Array  | An array of command IDs for the RCON permission.                                     |
| permission_scripts  | Array  | An array of script IDs for the RCON permission.                                      |
| permission_panels   | Array  | An array of panel IDs for the RCON permission.                                       |

#### RconPanel Object

| Setting           | Type                                           | Description                                                           |
| ----------------- | ---------------------------------------------- | --------------------------------------------------------------------- |
| panel_id          | String                                         | The panel ID for the RCON panel. This is used to reference the panel. |
| panel_name        | String                                         | The panel name for the RCON panel. This is used for display purposes. |
| panel_channel     | String                                         | The Discord channel ID for the RCON panel.                            |
| panel_server      | String                                         | The server ID for the RCON panel.                                     |
| panel_title       | String                                         | The title for the RCON panel.                                         |
| panel_description | String                                         | The description for the RCON panel.                                   |
| panel_commands    | [RconPanelCommands](#rconpanelcommands-object) | An array of RCON panel command configurations.                        |

#### RconPanelCommands Object

| Setting         | Type                                                 | Description                                                                       |
| --------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| command_id      | String                                               | The command ID for the RCON panel command. This is used to reference the command. |
| command_name    | String                                               | The command name for the RCON panel command. This is used for display purposes.   |
| command_command | String                                               | The command for the RCON panel command.                                           |
| command_args    | [RconPanelCommandArgs](#rconpanelcommandargs-object) | An array of RCON panel command argument configurations.                           |

#### RconPanelCommandArgs Object

| Setting         | Type   | Description                                                                                  |
| --------------- | ------ | -------------------------------------------------------------------------------------------- |
| arg_id          | String | The argument ID for the RCON panel command argument. This is used to reference the argument. |
| arg_name        | String | The argument name for the RCON panel command argument. This is used for display purposes.    |
| arg_placeholder | String | The argument placeholder for the RCON panel command argument.                                |

#### RconScript Object

| Setting         | Type                                             | Description                                                              |
| --------------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| script_id       | String                                           | The script ID for the RCON script. This is used to reference the script. |
| script_name     | String                                           | The script name for the RCON script. This is used for display purposes.  |
| script_commands | [RconScriptCommands](#rconscriptcommands-object) | An array of RCON script command configurations.                          |

#### RconScriptCommands Object

| Setting         | Type   | Description                                                                        |
| --------------- | ------ | ---------------------------------------------------------------------------------- |
| command_id      | String | The command ID for the RCON script command. This is used to reference the command. |
| command_command | String | The command for the RCON script command.                                           |

#### RconTimedCommand Object

| Setting          | Type                                                         | Description                                                                                          |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| command_id       | String                                                       | The command ID for the RCON timed command. This is used to reference the command.                    |
| command_name     | String                                                       | The command name for the RCON timed command. This is used for display purposes.                      |
| command_interval | String                                                       | The cron interval for the RCON timed command. Generate a cron interval [here](https://crontab.guru/) |
| command_tag      | String                                                       | The tag for the RCON timed command.                                                                  |
| command_commands | [RconTimedCommandCommands](#rcontimedcommandcommands-object) | An array of RCON timed command configurations.                                                       |

#### RconTimedCommandCommands Object

| Setting         | Type   | Description                                                                               |
| --------------- | ------ | ----------------------------------------------------------------------------------------- |
| command_id      | String | The command ID for the RCON timed command command. This is used to reference the command. |
| command_command | String | The command for the RCON timed command command.                                           |

#### ControllerPanel Object

| Setting           | Type   | Description                                                                 |
| ----------------- | ------ | --------------------------------------------------------------------------- |
| panel_id          | String | The panel ID for the controller panel. This is used to reference the panel. |
| panel_name        | String | The panel name for the controller panel. This is used for display purposes. |
| panel_server      | String | The server ID for the controller panel.                                     |
| panel_channel     | String | The Discord channel ID for the controller panel.                            |
| panel_title       | String | The title for the controller panel.                                         |
| panel_description | String | The description for the controller panel.                                   |