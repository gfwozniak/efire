

const Discord = require('discord.js');
const Dotenv = require('dotenv').config()
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ping Pong Bot Loaded!');
});

client.on('message', message => {
	console.log(bruh);
	if (message.content === 'Ping') {
		message.channel.send('Pong!');
	}
});

client.login(process.env.TOKEN);
