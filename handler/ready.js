// INPUT
const Discord = require('discord.js')
const moment = require('moment')
const fs = require('fs')
const client = require("../index").Client

// HANDLING
client.on("ready", () => {
    console.log(`${client.user.username} turned online at ${moment.utc().format("dddd, MMMM Do YYYY, hh:mm:ss")}`)
    client.user.setActivity(`mit dem Bannhammer`, {
        type: "PLAYING",
    });
    client.models = new Discord.Collection();
    const modelFiles = fs.readdirSync('./models').filter(file => file.endsWith('.js'))
    for (const file of modelFiles) {
        const model = require(`../models/${file}`)

        if (model) {
            client.models.set(model.name, model)
        }
    };
    client.commands = new Discord.Collection();
    const commandFolders = fs.readdirSync('./commands')
    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`);

            if (command.name) {
                client.commands.set(command.name, command);
            };
        };
    };
});