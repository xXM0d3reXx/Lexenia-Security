const IGNORED = new Set([
    '851073890795913286',
    '851073919762956288',
    '940303493288312842',
    '851074937594707998',
    '851073946895384627',
    '928973424779481128'
]);

module.exports = {
    name: 'lock',
    description: 'Locks every channel',
    execute: async (client, message, prefix, Discord) => {

        if (!message.member.permissions.has("KICK_MEMBERS")) {
            return message.reply("Ich weis zwar nicht von wo du diesen Command hast, aber bitte unterlasse es diesen zu nutzen. Danke").catch(console.error())
        }
        const channels = message.guild.channels.cache.filter(c => c.type !== 'category');
        channels.forEach(channel => {
            if (IGNORED.has(channel.id)) {
                channel.permissionOverwrites.edit(message.guild.roles.cache.get('912195069627498567'),
                    {
                        SEND_MESSAGES: false,
                    }
                )
            }
        })
        return message.channel.send(`<a:LX_haken:912459313518379028> ➽║ Alle Channel in (»🎀DER TREFFPUNKT) wurden gesperrt.`).catch(console.error())
    }
}