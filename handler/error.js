// INPUT
const Discord = require('discord.js')
const client = require("../index").Client

// HANDLING
client.on('rateLimit', (info) => {
    console.log(`Rate limit hit ${info.timeDifference ? info.timeDifference : info.timeout ? info.timeout : 'Unknown timeout '}, ${moment.utc().format("dddd, MMMM Do YYYY, hh:mm:ss")}`).catch(console.error)
});

client.on("error", function (error) {
    console.log(`client's WebSocket encountered a connection error: ${error}, ${moment.utc().format("dddd, MMMM Do YYYY, hh:mm:ss")}`).catch(console.error);
});

client.on("warn", function (info) {
    console.log(`warn: ${info}, ${moment.utc().format("dddd, MMMM Do YYYY, hh:mm:ss")}`).catch(console.error);
});

client.on("reconnecting", function () {
    console.log(`client tries to reconnect to the WebSocket, ${moment.utc().format("dddd, MMMM Do YYYY, hh:mm:ss")}`).catch(console.error);
});
