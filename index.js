
const Discord = require('discord.js');
const Dotenv = require('dotenv').config()
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Brrrrrrrrrrrrrrrrap');
});

const config = require('./config.json')

client.on('ready', () => {
  console.log('The client is ready!');
});

let msg; //reference to message
let inter; //cancel timeouts and intervals

// Create an event listener for messages
client.on('message', async (message) => {
  // If the message is "ping"
  if (message.content === 'startfire') {
    // Send "pong" to the same channel
    msg = await message.channel.send("fire starting", 'code');
    inter = setInterval(() => {
	setTimeout(() => {
	    msg.edit('```  /\n / |\n/ \\ \\\n\\_\\_/```', 'code');
	    setTimeout(() => {
		msg.edit('```\n   /\n \\/ \\\n / \\ \\\n \\\\__/```', 'code');
	    }, 2000);
	}, 2000);
    }, 4000);
  }
  else if (message.content === 'stopfire') {
    clearInterval(inter);
    if (msg != undefined) {
	msg.delete()
		.then(console.log)
		.catch(console.error);
    };
  }
});


client.login(config.token);
