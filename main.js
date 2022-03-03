const Discord = require('discord.js')

const client = new Discord.Client();

const ytdl = require("ytdL-core")

const prefix = '%';

var version ='1.0';

var servers  = {};

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync ('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Musterio is ready for the party!!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hello'){
       client.commands.get('hello').execute(message, args);
    } else if (command == 'wbu?'){
        client.commands.get('wbu').execute(message, args);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'play'){
        client.commands.get('play').execute(message, args);
    } else if (command == 'leave'){
        client.commands.get('leave').execute(message, args);
    }
});

client.login('inserttokenhere');

