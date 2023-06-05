---
sidebar_position: 2
---

# Information

Here is some general information about the bot to help you get started.

:::info
The bot is only supported on Windows at the moment, but I am planning on adding support for Linux in the future. Also Pterodactyl support is coming soon!
:::

This bot is used to automate the entire rust server wiping process. It has a ton of features and is very customizable. You can find all the configuration options [**here**](/docs/rustautowiper/configuration).

## File and Folder Paths

In the configuration of the bot you will see multiple options that require a file or folder path. Make sure this path is the full path to the file or folder. For example, if you want to use the `arkmanager.cfg` file in the `C:\rustserver\folder1\folder2` folder, you would use `C:\rustserver\folder1\folder2\config.cfg` as the path.

## What is Cron?

This bot uses cron to schedule tasks. Cron is a time-based job scheduler in Unix-like computer operating systems. Cron is used to schedule jobs (commands or shell scripts) to run periodically at fixed times, dates, or intervals. This allows you to schedule the bot to run actions at specific times.

When you would use timestamps you would need to update the timestamps every time you want to change the time or after every wipe. With cron you can just set it and forget it because it will automatically determine the next wipe time.

## Still need help?

If you still need help with the app, you can join the support server [**here**](https://discord.gg/5xEwm8e6Vy).
