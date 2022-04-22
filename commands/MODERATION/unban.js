const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: 'unban',
    description: 'Unbans a member',
    execute: async (client, message, prefix, Discord) => {
        const fail = new MessageEmbed()
        .setTitle(`**Moderation** ➽║ **ban**`)
        .setColor("RED")
        .setDescription("Mit diesem Befehl kann ein Teammitglied ein Mitglied bannen.")
        .addFields(
            { name: `\`Anwendung\``, value: `➽ #unban UserId <Entban Grund>`, inline: true},
            { name: `\`Beispiel\``, value: `➽ #unban ${client.user.id} User hat sich Entschuldigt`, inline: true},
            { name: `\`Benötigte Permissions\``, value: "➽ BAN_MEMBERS"}
        )
        .setTimestamp()
        .setFooter(`${message.author.tag} | Zeichen wie "<" und ">" bitte weglassen.`);
        let messageArray = message.content.split(" ")
        let args = messageArray.slice(1);
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Denkst du im ernst ich erlaube dir einen meiner ehemaligen Mitglieder zu entbannen???").catch(console.error())
       
        let unBan = await client.users.fetch(args[0]).catch(err => {console.error()});

        if (!unBan) {
            return message.reply({ embeds: [fail] }).catch(console.error());
        }

        let reason = args.slice(1).join(" ");

        if (!reason) {
            return message.reply({ embeds: [fail] }).catch(console.error());
        }
        const embed = new MessageEmbed()   
        .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> Eins unserer Mitglieder wurde entbannt! <a:LX_allaarrrmmmm:921527940439740486>`)
        .setDescription(`<a:LX_haken:912459313518379028> ➽║ ${unBan} wurde entbannt von ${message.author} \n\nGrund: **${reason}**`)
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
      
        message.guild.members.unban(unBan, reason ).catch(console.error())

        return message.reply({ embeds: [embed] }).catch(console.error())
    }
}