module.exports = {
    name: 'vno',
    description: 'vorschlag ablehnen',
    execute: async (client, message, args, prefix, Discord) => {

        if (message && !message.author.bot) {
            if (!message.member.permissions.has("ADMINISTRATOR")) {
                return message.reply("Ich weis zwar nicht von wo du diesen Command hast, aber bitte unterlasse es diesen zu nutzen. Danke").catch(console.error());
            }
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription("Tut uns leid, Wir haben uns dazu entschieden dein Vorschlag nicht anzunehmen.")
                .setImage('https://cdn.discordapp.com/attachments/954125799122956358/958358329162362930/Untitled.png')
                message.channel.send({
                embeds: [embed]
            }).catch(console.error());
            message.delete().catch(console.error())
        }
    }
}