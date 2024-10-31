---
sidebar_position: 2
---

# Setup

- [Setup](#setup)
  - [Create a Discord Bot Application](#create-a-discord-bot-application)
  - [Setup DBD Bot](#setup-dbd-bot)
    - [Local Configuration](#local-configuration)
    - [Remote Configuration](#remote-configuration)

## Create a Discord Bot Application

1. Go to the Discord Developer Portal and create a new application. [Discord Developer Portal](https://discord.com/developers/applications)
2. Click on the "New Application" button.

   ![Discord Developer Portal](/img/nexus/dev-portal.png)

3. Enter a name for your application and click on the "Create" button.
4. Click on the checkbox to agree to the Discord Developer Terms and click on the "Create" button.

   ![Create App Modal](/img/nexus/create-app-modal.png)

5. Click on the "Bot" tab on the left sidebar.

6. And then click on the "Reset Token" button to create a new bot token.

   ![Bot Page](/img/nexus/bot-page.png)

7. Click on the "Yes, do it!" button to reset the bot token.

   ![Reset Token](/img/nexus/reset-token.png)

8. Copy the bot token and save it for later use.

   ![Copy Token](/img/nexus/copy-token.png)

9. Enable all the necessary Intents for the bot.

   ![Intents](/img/nexus/bot-intents.png)

10. Click on the "OAuth2" tab on the left sidebar.

    ![Oauth2 Page](/img/nexus/oauth-page.png)

11. Under the "OAuth2 URL Generator" section, select the "bot" scope.

    [Oauth2 Scopes](/img/nexus/oauth-scopes.png)

12. Select the "Administrator" permission for the bot permissions.
13. Copy the generated URL.

    ![Oauth2 Perms](/img/nexus/oauth-bot-perms.png)

14. Paste the URL in your browser and authorize the bot to join your server.
15. Select the server where you want to add the bot and click on the "Continue" to add the bot to your server.

    ![Add Bot to Server](/img/nexus/add-bot-to-server.png)

16. Now the bot is added to your server.

## Setup DBD Bot

### Local Configuration

When running the bot with local configuration, you need to configure your config.json file locally on your machine instead of using the configuration page on the DBD Nexus site. This way you can run the bot without the need of configuring it through the DBD Nexus site.

:::note
This method is recommended for experienced users who are familiar with the configuration of JSON files and understand the structure of the configuration files. If you are new to this or not comfortable with editing JSON files, it is recommended to use the remote configuration method instead.
:::

1. Download the DBD Nexus Daemon from the [DBD Support Server](https://discord.com/channels/488177151946915841/1207711313132916878).
2. Extract the downloaded file.

   ![DBD Nexus Bot](/img/nexus/bot-folder.png)

3. Edit the `config.js` file with a text editor like [VSC](https://code.visualstudio.com/download).

4. Inside the `config.js` file you will have to enter your bot token in `general_bot_token`, the discord server ID at `general_credentials_guild_id` where you want to run the bot.

   ```json title="config.json file (Partial)"
   {
      "general_bot_token": "", // Your bot token. You can find this on the Discord Developer Portal. Or follow the steps mentioned above. 
      "general_credentials_guild_id": "", // The Discord server ID where you invited the bot application into.
      ...
   }
   ```

5. After editing the `config.js` file, save the changes. and close the file.
6. Inside the extracted folder run the `start-windows.bat` file. (For Windows users) else run the `start-other.sh` file. (For Linux users)
7. The bot will now start and install the necessary files and modules.
8. On the first start, the bot will ask for your DBD Account Secret. This can be found on the DBD Nexus site under the "Account" tab. Make sure to enter this and keep it hidden from others.

   ![DBD Account Secret](/img/nexus/bot-start-secret.png)

9.  Secondly, the bot will ask the config id. If you wanna use an existing config from the site make sure to enter the config id. If you don't have a remote config you can enter a any new config id to create a new config.

   ![Config ID](/img/nexus/bot-start-config.png)

10. Once the bot is started, you can see the bot running in your server.

### Remote Configuration

When running the bot with remote configuration, you need to configure your bot through the DBD Nexus site. This way you can easily manage your bot's configuration and modules through the DBD Nexus site without the need of editing the configuration file manually.

:::warning
Currently the remote configuration feature is not available. It will be available in the upcoming updates. For now, you can use the local configuration method to run your bot(s).
:::