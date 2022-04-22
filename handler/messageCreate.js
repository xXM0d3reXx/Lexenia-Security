// INPUT
const Discord = require('discord.js')
const client = require("../index").Client

// HANDLING
client.on('messageCreate', message => {

    let prefix = '#'
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1)
    let cmd = messageArray[0]?.toLowerCase();

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    let command = client.commands.get(cmd.slice(prefix.length));
    if (!command) {
        return
    }
    if (command) command.execute(client, message, args, prefix, Discord);

});