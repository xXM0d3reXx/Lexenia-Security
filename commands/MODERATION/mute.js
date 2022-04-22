const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: 'mute',
    description: 'Mutes a member',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
            .setTitle(`**Moderation** ➽║ **mute**`)
            .setColor("RED")
            .setDescription("Mit diesem Befehl kann ein Teammitglied ein Mitglied muten.")
            .addFields({
                name: `\`Anwendung\``,
                value: `➽ #mute @User <Mute Grund>\n➽ #mute UserId <Mute Grund>`,
                inline: true
            }, {
                name: `\`Beispiel\``,
                value: `➽ #mute ${client.user} Beleidigung\n➽ #mute ${client.user.id} Beleidigung`,
                inline: true
            }, {
                name: `\`Benötigte Permissions\``,
                value: "➽ MANAGE_MESSAGES"
            })
            .setTimestamp()
            .setFooter(`${message.author.tag} | Zeichen wie "<" und ">" bitte weglassen.`);
        // Assing mute role
        const guild = client.guilds.cache.get('851071074736144415');
        const role = guild.roles.cache.get('912170871760752661')
        // First argument is the user to mute
        let toMute = (message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        // Reason
        let reason = String(args.slice(1).join(" "))
        // Checking The mute status and permissions
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.reply("Denkst du im ernst ich erlaube dir einen meiner Mitglieder zu muten???").catch(console.error())
        } else if (!toMute) {
            return message.reply({
                embeds: [fail]
            }).catch(console.error())
        } else if (toMute.permissions.has('BAN_MEMBERS' || 'KICK_MEMBERS' || 'ADMINISTRATOR')) {
            return message.reply({
                embeds: [fail]
            }).catch(console.error())
        } else if (toMute.roles.cache.some(role => role.id === '912170871760752661')) {
            return message.reply({
                embeds: [fail]
            }).catch(console.error())
        }
        // Running the Command
        else try {
            if (reason) {
                toMute.roles.add(role).catch(console.error());
                const embed = new MessageEmbed()
                    .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> Eins unserer Mitglieder wurde gemuted! <a:LX_allaarrrmmmm:921527940439740486>`)
                    .setDescription(`<a:LX_haken:912459313518379028> ➽║ ${toMute} wurde gemuted\n\nGrund: **${reason}**`)
                    .setColor("RED")
                message.reply({
                    embeds: [embed]
                }).catch(console.error())
            } else {
                toMute.roles.add(role).catch(console.error());
                const embed = new MessageEmbed()
                    .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> Eins unserer Mitglieder wurde gemuted! <a:LX_allaarrrmmmm:921527940439740486>`)
                    .setDescription(`<a:LX_haken:912459313518379028> ➽║ ${toMute} wurde gemuted\n\nGrund: **Kein Grund angegeben**`)
                    .setColor("RED")
                message.channel.send({
                    embeds: [embed]
                }).catch(console.error())
            }
        } catch (err) {
            return console.error()
        }
    }
}