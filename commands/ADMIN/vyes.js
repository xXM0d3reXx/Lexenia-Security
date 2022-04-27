module.exports = {
    name: 'vyes',
    description: 'vorschlag annehmen',
    execute: async (client, message, args, prefix, Discord) => {

        if (message && !message.author.bot) {
            if (!message.member.permissions.has("ADMINISTRATOR")) {
                return message.reply("Ich weis zwar nicht von wo du diesen Command hast, aber bitte unterlasse es diesen zu nutzen. Danke").catch(console.error());
            }
            const embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setDescription("Glückwunsch! Wir haben uns dazu entschieden dein Vorschlag anzunehmen, und werden diesen bald umsetzen.")
                .setImage('https://fcothmarsingen.ch/wp-content/uploads/2021/05/angenommen.png')
            message.channel.send({
                embeds: [embed]
            }).catch(console.error());
            message.delete().catch(console.error())
        }
    }
}