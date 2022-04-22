const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: 'ban',
    description: 'Bans a member',
    execute: async (client, message, prefix, Discord) => {
        const fail = new MessageEmbed()
        .setTitle(`**Moderation** ➽║ **ban**`)
        .setColor("RED")
        .setDescription("Mit diesem Befehl kann ein Teammitglied ein Mitglied bannen.")
        .addFields(
            { name: `\`Anwendung\``, value: `➽ #ban @User <Ban Grund>\n➽ #ban UserId <Ban Grund>`, inline: true},
            { name: `\`Beispiel\``, value: `➽ #ban ${client.user} Server Werbung\n➽ #ban ${client.user.id} Server Werbung`, inline: true},
            { name: `\`Benötigte Permissions\``, value: "➽ BAN_MEMBERS"}
        )
        .setTimestamp()
        .setFooter(`${message.author.tag} | Zeichen wie "<" und ">" bitte weglassen.`);
        let messageArray = message.content.split(" ")
        let args = messageArray.slice(1);
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Denkst du im ernst ich erlaube dir einen meiner Mitglieder zu bannen???").catch(console.error())

        let toBan = (message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        let reason = args.slice(1).join(" ");

        if (!toBan) {
            return message.reply({ embeds: [fail] }).catch(console.error())
        }
        if (toBan === message.author.id) {
            return message.reply({ embeds: [fail] }).catch(console.error())
        }
        if (!reason) {
            return message.reply({ embeds: [fail] }).catch(console.error())
        }
        if (toBan.permissions.has('BAN_MEMBERS' || 'KICK_MEMBERS' || 'ADMINISTRATOR')) {
            return message.reply({ embeds: [fail] }).catch(console.error())
        }
        const embed = new MessageEmbed()
            .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> Eins unserer Mitglieder wurde gebannt! <a:LX_allaarrrmmmm:921527940439740486>`)
            .setDescription(`<a:LX_haken:912459313518379028> ➽║ ${toBan} wurde gebannt von ${message.author} \n\nGrund: **${reason}**`)
            .setColor("RED")
            .setThumbnail(message.author.displayAvatarURL({
                dynamic: true,
                size: 512
            }))

        toBan.ban({
            reason,
            days: 0
        }).catch(console.error())

        return message.reply({
            embeds: [embed]
        }).catch(console.error())
    }
}