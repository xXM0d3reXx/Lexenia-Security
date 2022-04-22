const Discord = require('discord.js');
const {
    MessageEmbed
} = require("discord.js");
const {
    antijoin
} = require('../../models/Collection');
module.exports = {
    name: 'antiraid',
    description: 'Used for antiraid',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
        .setTitle(`**Moderation** ➽║ **antiraid**`)
        .setColor("RED")
        .setDescription("Mit diesem Befehl kann ein Teammitglied den server in Quarantäne stecken.")
        .addFields(
            { name: `\`Anwendung\``, value: `➽ #antiraid on\n➽ #antiraid off\n➽ #antiraid list`, inline: true},
            { name: `\`Benötigte Permissions\``, value: "➽ MANAGE_MESSAGES"}
        )
        .setTimestamp();

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Denkst du im ernst ich erlaube dir meinen Server in Quarantäne zu stecken???").catch(console.error())

        const query = args[0]?.toLowerCase();
        if (!query) return message.reply({ embeds: [fail] }).catch(console.error());

        const getCollection = antijoin.get(message.guild.id);
        if (query === "on") {
            if (getCollection) return message.reply("<a:LX_kreuz:917141623777939537> ➽║ Antiraid ist aktuell noch online").catch(console.error());
            antijoin.set(message.guild.id, []).catch(console.error());
            message.reply("<a:LX_haken:912459313518379028> ➽║ Antiraid ist nun an").catch(console.error())
        } else if (query === "off") {
            if (!getCollection) return message.reply("<a:LX_kreuz:917141623777939537> ➽║ Antiraid ist aktuell noch ausgeschaltet").catch(console.error());
            message.reply(
                `Kicked Members: ${getCollection.map((value) => {
                    return `${value.tag} (${value.id})`;
                })}`
            ).catch(console.error())
            antijoin.delete(message.guild.id);
            message.reply("<a:LX_haken:912459313518379028> ➽║ Antiraid ist nun aus").catch(console.error())
        } else if (query === "list") {
            if (!getCollection) return message.reply("<a:LX_kreuz:917141623777939537> ➽║ Antiraid ist aktuell noch ausgeschaltet").catch(console.error());
            message.reply(
                `Kicked Members: ${getCollection.map((value) => {
                    return `${value.tag} (${value.id})`;
                })}`
            ).catch(console.error())
        }
    }
}