const {
    MessageEmbed
} = require("discord.js");
const ms = require("../../node_modules/ms");

module.exports = {
    name: 'tempmute',
    description: 'Tempmutes a member',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
            .setTitle(`**Moderation** ➽║ **tempmute**`)
            .setColor("RED")
            .setDescription("Mit diesem Befehl kann ein Teammitglied ein Mitglied Zeitbedingt muten.")
            .addFields({
                name: `\`Anwendung\``,
                value: `➽ #tempmute @User <Zeit> <Mute Grund>\n➽ #tempmute UserId <Zeit> <Mute Grund>`,
                inline: true
            }, {
                name: `\`Beispiel\``,
                value: `➽ #tempmute ${client.user} 1h Beleidigung\n➽ #tempmute ${client.user.id} 1h Beleidigung`,
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
        //  Time
        let time = args[1]
        // Reason
        let reason = String(args.slice(2).join(" "))
        // Checking The mute status and permissions
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.reply("Denkst du im ernst ich erlaube dir einen meiner Mitglieder zu tempmuten???").catch(console.error())
        } else if (!toMute) {
            return message.reply({
                embeds: [fail]
            }).catch(console.error());
        } else if (toMute.permissions.has('BAN_MEMBERS' || 'KICK_MEMBERS' || 'ADMINISTRATOR')) {
            return message.reply({
                embeds: [fail]
            }).catch(console.error());
        } else if (toMute.roles.cache.some(role => role.id === '912170871760752661')) {
            return message.reply({
                embeds: [fail]
            }).catch(console.error());
        }
        // Running the Command
        else if (!time) {
            return message.reply({
                embeds: [fail]
            }).catch(console.error());
        } else try {
            if (time) {
                if (reason) {
                    const embed = new MessageEmbed()
                        .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> Eins unserer Mitglieder wurde gemuted! <a:LX_allaarrrmmmm:921527940439740486>`)
                        .setDescription(`<a:LX_haken:912459313518379028> ➽║ ${toMute} wurde für ${ms(ms(time))} gemuted von ${message.author} \n\nGrund: **${reason}**`)
                        .setColor("RED")

                    toMute.roles.add(role).catch(console.error())

                    message.reply({
                        embeds: [embed]
                    }).catch(console.error())
                    setTimeout(function () {
                        if (!toMute.roles.cache.some(role => role.id === '912170871760752661')) {
                            return
                        }
                        try {
                            toMute.roles.remove(role).catch(console.error());
                            const embed = new MessageEmbed()
                                .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> Eins unserer Mitglieder wurde entmuted! <a:LX_allaarrrmmmm:921527940439740486>`)
                                .setDescription(`<a:LX_haken:912459313518379028> ➽║ ${toMute} wurde entmuted\n\nGrund: **Timeout zeit ist vorbei.**`)
                                .setColor("RED")
                            message.channel.send({
                                embeds: [embed]
                            }).catch(console.error())
                        } catch (err) {
                            return console.error()
                        }
                    }, ms(time));
                } else {
                    const embed = new MessageEmbed()
                        .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> Eins unserer Mitglieder wurde gemuted! <a:LX_allaarrrmmmm:921527940439740486>`)
                        .setDescription(`<a:LX_haken:912459313518379028> ➽║ ${toMute} wurde für **${ms(ms(time))}** gemuted von ${message.author} \n\nGrund: **Kein Grund angegeben**`)
                        .setColor("RED")

                    toMute.roles.add(role).catch(console.error())

                    message.reply({
                        embeds: [embed]
                    }).catch(console.error())
                    setTimeout(function () {
                        if (!toMute.roles.cache.some(role => role.id === '912170871760752661')) {
                            return
                        }
                        try {
                            toMute.roles.remove(role).catch(console.error());
                            const embed = new MessageEmbed()
                                .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> Eins unserer Mitglieder wurde entmuted! <a:LX_allaarrrmmmm:921527940439740486>`)
                                .setDescription(`<a:LX_haken:912459313518379028> ➽║ ${toMute} wurde entmuted\n\nGrund: **Timeout zeit ist vorbei.**`)
                                .setColor("RED")
                            message.channel.send({
                                embeds: [embed]
                            }).catch(console.error())
                        } catch (err) {
                            return console.error()
                        }
                    }, ms(time));
                }
            }
        } catch (err) {
            return message.reply({
                embeds: [fail]
            }).catch(console.error());
        }
    }
}