const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: 'kick',
    description: 'Kicks a member',
    execute: async (client, message, prefix, Discord) => {
        const fail = new MessageEmbed()
            .setTitle(`**Moderation** ➽║ **kick**`)
            .setColor("RED")
            .setDescription("Mit diesem Befehl kann ein Teammitglied ein Mitglied kicken.")
            .addFields(
                { name: `\`Anwendung\``, value: `➽ #kick @User <Kick Grund>\n➽ #kick UserId <Kick Grund>`, inline: true },
                { name: `\`Beispiel\``, value: `➽ #kick ${client.user} Server Werbung\n➽ #kick ${client.user.id} Server Werbung`, inline: true },
                { name: `\`Benötigte Permissions\``, value: "➽ KICK_MEMBERS" }
            )
            .setTimestamp()
            .setFooter(`${message.author.tag} | Zeichen wie "<" und ">" bitte weglassen.`);
        let messageArray = message.content.split(" ")
        let args = messageArray.slice(1);
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Denkst du im ernst ich erlaube dir einen meiner Mitglieder zu kicken???").catch(console.error())

        let toKick = (message.mentions.members.first() || message.guild.members.cache.get(args[0]))
        let reason = args.slice(1).join(" ");

        if (!toKick) {
            return message.reply({ embeds: [fail] }).catch(console.error())
        }
        if (!reason) {
            return message.reply({ embeds: [fail] }).catch(console.error())
        }
        if (toKick.permissions.has('BAN_MEMBERS' || 'KICK_MEMBERS' || 'ADMINISTRATOR')) {
            return message.reply({ embeds: [fail] }).catch(console.error())
        }
        const embed = new MessageEmbed()
            .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> Eins unserer Mitglieder wurde gekickt! <a:LX_allaarrrmmmm:921527940439740486>`)
            .setDescription(`<a:LX_haken:912459313518379028> ➽║ ${toKick} wurde gekickt von ${message.author} \n\nGrund: **${reason}**`)
            .setColor("RED")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))

        toKick.kick(reason).catch(console.error())
        return message.reply({ embeds: [embed] }).catch(console.error())
    }
}