---
sidebar_position: 2
---

# Setup

- [Setup](#setup)
  - [Create a Discord Bot Application](#create-a-discord-bot-application)
  - [Setup DBD Nexus](#setup-dbd-nexus)
  - [Setup DBD Nexus Daemon](#setup-dbd-nexus-daemon)

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

## Setup DBD Nexus

1. Go to the [DBD Nexus](https://nexus.defaultsbotdev.com/) website.
2. Login with your Discord account.
   ![Login](/img/nexus/nexus-login.png)

3. Go to the "CONFIGURATION" page.

   ![Configuration](/img/nexus/nexus-home-page.png)

4. Enter the bot token that you copied earlier into the "Bot Token" field.

   ![Bot Token](/img/nexus/nexus-token-field.png)

5. Go to Discord and copy the ID of the server you added the bot to.

   ![Server ID](/img/nexus/copy-server-id.png)

   :::note
   If you don't see the server ID, enable the developer mode in Discord settings.

   Go to `User Settings` -> `Advanced` -> `Developer Mode`.

   ![Developer Mode](/img/nexus/enable-dev-mode.png)
   :::

6. Paste the server ID into the "Server ID" field.

   ![Server ID Field](/img/nexus/nexus-server-id-field.png)

7. Now you have configured the Nexus panel.

## Setup DBD Nexus Daemon

1. Download the DBD Nexus Daemon [HERE](https://discord.com/channels/488177151946915841/1207711313132916878)

2. Extract the downloaded file.

   ![Extracted Folder](/img/nexus/daemon-extract.png)

3. Open the extracted folder and run the `start-windows.bat` file. (For Windows users) else run the `start-other.sh` file.
4. Copy the Daemon IP from the console and paste it into the "Daemon IP" field in the Nexus Dashboard.
5. The Nexus Daemon will install all the necessary dependencies and start the daemon.

   ![Start Daemon](/img/nexus/daemon-starting.png)

6. Go to the "DASHBOARD" page and enter the Daemon IP in the "Daemon IP" field.
7. After entering the Daemon IP, the dashboard will connect and the Daemon badge will turn green.

   ![Daemon Started](/img/nexus/dashboard-ip.png)

8. Once the badge turns green, you can start your bot from the "DASHBOARD" page.

   ![Start Bot](/img/nexus/daemon-running.png)

9. Now your bot is running and you can manage it from the Nexus panel.

:::note
If you face any issues while setting up the Nexus panel, feel free to ask for help in the [DBD Community Discord Server](https://discord.gg/Rc2TGdQ37g).
:::
