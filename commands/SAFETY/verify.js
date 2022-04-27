const safeshema = require('../../models/safe-shema');
const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'verify',
    description: 'Verifys a Member',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
            .setTitle(`**Moderation** ➽║ **verify**`)
            .setColor("RED")
            .setDescription("Mit diesem Befehl kann ein Teammitglied ein Mitglied verifizieren.")
            .addFields(
                { name: `\`Anwendung\``, value: `➽ #verify @User\n➽ #verify UserId`, inline: true },
                { name: `\`Beispiel\``, value: `➽ #verify ${client.user}\n➽ #verify ${client.user.id}`, inline: true },
                { name: `\`Benötigte Permissions\``, value: "➽ MANAGE_MESSAGES" }
            )
            .setTimestamp();
        if (message.channel.type !== "DM") {

            if (message && !message.author.bot) {

                if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Denkst du im ernst ich erlaube dir einen meiner neuen Mitglieder zu verifizieren???").catch(console.error())
                let toVerify = (message.mentions.members.first() || message.guild.members.cache.get(args[0]));
                if (!toVerify) return message.reply({ embeds: [fail] }).catch(console.error());
                if (toVerify.id === message.author.id) return message.reply({ embeds: [fail] }).catch(console.error());
                if (toVerify.roles.cache.some(role => role.id === '912195069627498567')) return message.reply({ embeds: [fail] }).catch(console.error());

                if (toVerify) {
                    const guild = client.guilds.cache.get("851071074736144415");
                    var chan = guild.channels.cache.get("851073890795913286"); //hauptchat
                    var channa = guild.channels.cache.get("928091093189423154");
                    toVerify.roles.add('912195069627498567').catch(console.error());
                    chan.send(`Heeyy <@${toVerify.id}>, willkommen auf 𝕃𝔼𝕏𝔼ℕ𝕀𝔸! <a:LX_wave:912478975421481030>
Wir hoffen du wirst hier Spaß haben! <a:LX_laughboom:912460061052391516>`).catch(console.error());
                    channa.send(`<a:LX_haken:912459313518379028> ➽║ <@${toVerify.id}> wurde verifiziert!`).catch(console.error())
                    data = new safeshema({
                        name: toVerify.username,
                        userId: toVerify.id,
                        guildId: message.guild.id
                    });
                } data.save();
            };
        };
    }
}