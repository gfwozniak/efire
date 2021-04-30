
const Discord = require('discord.js');
const Dotenv = require('dotenv').config()
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Brrrrrrrrrrrrrrrrap.\nThe client is ready.');
});

let msg; //reference to edited message
let inter; //interval id so that it can be canceled
let y = 0; //fire count

// Create an event listener for messages
client.on('message', async (message) => {
  // If the message is "startfire"
  if (message.content === 'f!start' && y == 0) {
    y = 1;
    // Send editable message to the same channel
    msg = await message.channel.send("fire starting", 'code');
    let x = 0;
	//FÌRE by Martin Kleppe (modified)
	inter = setInterval(p=h=>{
		for(p[I++*I%17+
			578]=i=89;i++<630;h+=i%30?" *"[p[
			i]=p[i]+p[i+1]+p[i+29]+p[i+30]>>2
			]||8:"\n");
        //this stuff just makes sure the bot uploads at a speed lower than the rate limit
	if (x < 4) {
                x++;
        }
        else {
		msg.edit('```' + h + '\n|\\\\\\\\\\                ///////\n     \\\\\\\\\\      ///////\n          \\\\\\\\\\\\\\\\\n      /////      \\\\\\\\\\\\\\\n /////                  \\\\\\\\\\```', "code");
                x = 0;
        }
    },I=300)
  }
  //breaks interval, deletes message
  else if (message.content === 'f!stop' && y == 1) {
    clearInterval(inter);
    y = 0;
    if (msg != undefined) {
	msg.delete()
		.then(console.log)
		.catch(console.error);
    };
  }
});


client.login(process.env.TOKEN);
