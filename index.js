
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
// Create an event listener for messages
client.on('message', async (message) => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    msg = await message.channel.send("`pong`", 'code');
    setTimeout(() => {
	msg.edit('brap');			
    }, 2000);

    /*
    const channel = new Discord.Client().channels.fetch("835921321531015180")
    channel.messages.fetch({ limit: 1 })
    */      
  };
});

/*
  client.channels.fetch('835921321531015180').messages.fetch().then((messages) => {
    if (messages.size === 0) 
    {
      // Send a new message
      channel.send('1')
    } 
    else 
    {
      // Edit the existing message
      for (const message of messages) {
        message[1].edit('2')
      }
    }
  })
})
*/

client.login(config.token);
