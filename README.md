# efire
#### Description:

This is my first repo, so not exactly sure what info I should put in here...

###### I used these packages:
node.js , discord.js , dotenv

###### How to use:
Before anything, you need to add a .env file in the same place index.js is. It should have one line:

> TOKEN=[bot token]

^ without the square brackets

Once you do that you can start the bot using "node index.js". Once it is running, you can use the commands f!start and f!stop (typed out in discord) to start or stop the campfire. As long as the bot has permission to read chat and send messages, it should work.

###### Credits:
FÌRE - ASCII Art Fire in about 128 Bytes of JavaScript by Martin Kleppe aem1k.com/fire

###### File breakdown:
All the important code is in index.js. I commented all the important information. The reason why the bot updates the message only once per second is to stay within the rate limits of the discord api.
