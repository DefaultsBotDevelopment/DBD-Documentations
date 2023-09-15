---
sidebar_position: 3
---

# Configuration

## How to configure

Most of the DBD products have a configuration file. This file is used to configure the bot to your liking. You can find the configuration file in the bot's folder. The configuration file is called `config.json` or `config.js`.

:::tip
You can open the configuration file with a proper text editor, like [**Visual Studio Code**](https://code.visualstudio.com/) or [**Atom**](https://atom.io/). Editors like these will highlight the syntax and make it easier to edit the configuration file. and will validate the syntax.

If you still want to use a simple text editor, you can use [**JSONLint**](https://jsonlint.com/) to validate the syntax of the configuration file.
:::

## Configuration options

### Objects

In the configuration file you will see a lot of `{}`. These are objects, and they contain options. For example:

```json
{
	"settings": {
		"option1": "value1",
		"option2": "value2",
		"option3": "value3"
	}
}
```

### Arrays

In configurations you sometimes have an option with an array []. This means you can add multiple values to this option. For example, if you have an option called `prefix` and the value is `["!", "?"]`, this means you can use both `!` and `?` as prefix. If you want to add another prefix, you can add it like this: `["!", "?", "-"]`.

This is also possible to add objects into arrays [], for example:

```json
{
	"prefix": ["!", "?", "-"],
	"commands": [
		{
			"name": "ping",
			"description": "Pong!",
			"usage": "ping",
			"aliases": ["pong", "p"]
		},
		{
			"name": "help",
			"description": "Shows the help menu",
			"usage": "help",
			"aliases": ["h"]
		}
	]
}
```

Above you can see how the `commands` option has 2 objects in the array []. make sure to separate the objects with a comma. Each object has the same options as the other objects, but with different values.
