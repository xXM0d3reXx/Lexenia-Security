const safeshema = require('../../models/safe-shema');
const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: 'safe',
    description: 'Verifys a to young Member',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
            .setTitle(`**Moderation** ➽║ **safe**`)
            .setColor("RED")
            .setDescription("Mit diesem Befehl kann ein Teammitglied ein Mitglied verifizieren.")
            .addFields(
                { name: `\`Anwendung\``, value: `➽ #safe UserId`, inline: true },
                { name: `\`Beispiel\``, value: `➽ #safe ${client.user.id}`, inline: true },
                { name: `\`Benötigte Permissions\``, value: "➽ MANAGE_MESSAGES" }
            )
            .setTimestamp();

        if (message.channel.type !== "DM") {

            if (message && !message.author.bot) {

                if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Denkst du im ernst ich erlaube dir einen meiner neuen Mitglieder zu verifizieren???").catch(console.error())

                let toVerify = await client.users.fetch(args[0]).catch(err => { console.error() });

                if (!toVerify) {
                    return message.reply({ embeds: [fail] }).catch(console.error());
                }
                if (toVerify.id === message.author.id) {
                    return message.reply({ embeds: [fail] }).catch(console.error());
                };

                if (toVerify) {
                    message.reply(`<a:LX_haken:912459313518379028> ➽║ ${toVerify} wurde Verifiziert`).catch(console.error())
                    data = new safeshema({
                        name: toVerify.username,
                        userId: toVerify.id,
                        guildId: message.guild.id
                    });
                };
                data.save();
            }
        };
    }
}