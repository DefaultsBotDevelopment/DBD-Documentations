---
sidebar_position: 2
---

# Frequently Asked Questions

Here are some frequently asked questions about the bot.

## How can i remove the black boxes inside the embeds?

First of all the black boxes are called codeblocks.

- For the stats command you can remove the "\`\`\`" from the value options inside the config.json file.

- For the leaderboard command you can change the `dataFormat` option from "\`\`\`json\n{data}\`\`\`" to "{data}" inside the config.json file.

:::info
The "json\n" part is what makes the text inside the codeblock have different colors. (google for "discord codeblock colors" for more information)
:::

## How do i use custom emojis inside the embeds?

You can use custom emojis inside the embeds by using the emoji by its id, for example: `<:emoji_name:emoji_id>` (you can get the emoji id by typing `\` before the emoji in discord)

:::info
You can only use custom emojis outside of the codeblocks, only unicode emojis are supported inside the codeblocks due to discord limitations.
:::

## Can i use the bot on multiple servers?

The license is only valid for one server, if you want to use the bot on multiple servers you will need to buy multiple licenses. though you can use the bot on multiple game servers as long as they are connected to the same database.
