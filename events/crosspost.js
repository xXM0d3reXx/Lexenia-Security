const client = require("../index").Client

client.on('messageCreate', (message) => {
    const {
        channel
    } = message
    if (channel.type === 'GUILD_NEWS') {
        message.crosspost()
            .catch(console.error())
    };
});