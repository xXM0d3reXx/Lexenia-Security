const {
    MessageEmbed
} = require("discord.js");
module.exports = {
    name: 'extra',
    description: 'Wishing a user happy birthday',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
            .setTitle(`**Moderation** ➽║ **extra**`)
            .setColor("RED")
            .setDescription("Mit diesem Befehl kann ein Teammitglied einem Mitglied alles gute wünschen.")
            .addFields(
                { name: `\`Anwendung\``, value: `➽ #extra @User\n➽ #extra UserId`, inline: true },
                { name: `\`Beispiel\``, value: `➽ #extra ${client.user}\n➽ #extra ${client.user.id}`, inline: true },
                { name: `\`Benötigte Permissions\``, value: "➽ ADMINISTRATOR" }
            )
            .setTimestamp();
        if (message.channel.type !== "DM") {

            if (message && !message.author.bot) {
                if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Ich weis zwar nicht von wo du diesen Command hast, aber bitte unterlasse es diesen zu nutzen. Danke").catch(console.error());
                let toWarn = (message.mentions.members.first() || message.guild.members.cache.get(args[0]));
                const guild = client.guilds.cache.get("851071074736144415");
                const channel = guild.channels.cache.get("928973424779481128");
                if (!toWarn) return message.reply({ embeds: [fail] }).catch(console.error());

                if (toWarn) {
                    const embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setDescription(`<a:LX_birthdaycake:932745324802486372> **__Alles Gute zum Geburtstag!__** <a:LX_herz:912460140001763338> <a:LX_birthdaycake:932745324802486372>\n
**${toWarn}** hat **heute** Geburtstag - Wir wünschen dir einen **schönen Geburtstag**, eine **tolle Feier (mit Freunden, Familie oder/und uns)**  & viele **tolle Geschenke** <:LX_doglaugh:912458647701950484>\n
Genieße deine **heutigen Vorteile** auf unserem Server:
<:LX_pfeil:914565491606052885> Genieße deinen **DOPPELT XP** Boost!
<:LX_pfeil:914565491606052885> Schalte Werbung für dein Social Media in <#851073441775747082>!
<:LX_pfeil:914565491606052885> Du bist direkt unter dem Team gelistet!`)
                        .setImage('https://cdn.discordapp.com/attachments/928761686163337278/932744826263334922/unknown.png')
                        .setFooter("Nutze #gbset tag monat um auch deinen Geburtstag zu feiern.", 'https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif')
                    channel.send({
                        embeds: [embed]
                    }).catch(console.error())
                }
            }
        }
    }
}