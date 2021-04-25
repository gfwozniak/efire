


const Discord = require('discord.js');
const Dotenv = require('dotenv').config()
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Brrrrrrrrrrrrrrrrap');
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply(msg.type);
	}
});


client.login(process.env.TOKEN);
