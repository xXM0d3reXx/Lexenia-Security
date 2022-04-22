// INPUT
const Discord = require('discord.js')
const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

// INTENTS AND PARTIALS
const {
    Intents
} = Discord

const client = new Discord.Client({

    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_BANS,
    ],

    partials: ["CHANNEL"],

});

// EXPORT CLIENT
module.exports.Client = client

// HANDLER
const handlerFiles = fs.readdirSync("./handler").filter(file => file.endsWith(".js"));
for (const file of handlerFiles) {
    require(`./handler/${file}`);

};
console.log("Es wurden alle Handler geladen");

let listing = [];
fs.readdirSync('./handler').forEach(function (listings) {
    listing.push(listings);
});
console.log(listing);

client.events = new Discord.Collection();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);

    if (event) {
        client.events.set(event.name, event);
    }
};

// LOGIN
client.login(process.env.TOKEN)
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})