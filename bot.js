const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const prizes = ["prize1", "prize2", "prize3"];

client.on('message', message => {
    if(message.content === "!prize"){
        message.reply("You won the following prize: \n"+prizes[Math.floor(Math.random()*prizes.length)]);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
