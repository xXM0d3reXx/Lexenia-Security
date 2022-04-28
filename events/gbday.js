const gbschema = require('../models/gb-schema');
const Discord = require('discord.js');
const client = require("../index").Client
const {
    setInterval
} = require('timers')
client.on("ready", () => {

    const guild = client.guilds.cache.get("851071074736144415");
    const channel = guild.channels.cache.get("928973424779481128");

    setInterval(async function () {

        var hour24 = new Date().getHours()
        if (hour24 === 22) {

            var dayCount = new Date().getDate() + 1;
            var monthCount = new Date().getMonth() + 1;

            gbschema.find({
                guildId: "851071074736144415"
            }).find({
                day: dayCount
            }).find({
                month: monthCount
            }).exec((err, res) => {
                if (err) {
                    console.log(err)
                }
                if (res.length === 0) {
                    return
                } else if (res.length === 1) {
                    let reply = `<a:LX_birthdaycake:932745324802486372> **__Alles Gute zum Geburtstag!__** <a:LX_herz:912460140001763338> <a:LX_birthdaycake:932745324802486372>\n\n`

                    res.forEach(async (result) => {
                        const {
                            userId
                        } = result;
                        reply += `**<@${userId}>** hat **heute** Geburtstag - Wir wünschen dir einen **schönen Geburtstag**, eine **tolle Feier (mit Freunden, Familie oder/und uns)**  & viele **tolle Geschenke** <:LX_doglaugh:912458647701950484>\n\n`
                        const member = await guild.members.fetch(userId).catch(console.error())
                        await member.roles.add('928973585530388490').catch(console.error())
                        setInterval(async function () {
                            member.roles.remove('928973585530388490').catch(console.error());
                        }, 60 * 1000 * 60 * 24)
                    });



                    const embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setDescription(reply + `Genieße deine **heutigen Vorteile** auf unserem Server:
<:LX_pfeil:914565491606052885> Genieße deinen **DOPPELT XP** Boost!
<:LX_pfeil:914565491606052885> Schalte Werbung für dein Social Media in <#851073441775747082>!
<:LX_pfeil:914565491606052885> Du bist direkt über dem Team gelistet!`)
                        .setImage('https://cdn.discordapp.com/attachments/928761686163337278/932744826263334922/unknown.png')
                        .setFooter("Nutze #gbset tag monat um auch deinen Geburtstag zu feiern.", 'https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif')
                    channel.send({
                        embeds: [embed]
                    }).catch(console.error());
                } else if (res.length > 1) {
                    let reply = `<a:LX_birthdaycake:932745324802486372> **__Alles Gute zum Geburtstag!__** <a:LX_herz:912460140001763338> <a:LX_birthdaycake:932745324802486372>\n\n`

                    res.forEach(async (result) => {
                        const {
                            userId
                        } = result;
                        reply += `**<@${userId}>**,`
                        const member = await guild.members.fetch(userId).catch(console.error());
                        await member.roles.add('928973585530388490').catch(console.error())
                        setInterval(async function () {
                            member.roles.remove('928973585530388490').catch(console.error());
                        }, 60 * 1000 * 60 * 24)
                    });



                    const embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setDescription(reply + `haben **heute** Geburtstag - Wir wünschen euch einen **schönen Geburtstag**, eine **tolle Feier (mit Freunden, Familie oder/und uns)**  & viele **tolle Geschenke** <:LX_doglaugh:912458647701950484>\n
Genießt eure **heutigen Vorteile** auf unserem Server:
<:LX_pfeil:914565491606052885> Genießt euren **DOPPELT XP** Boost!
<:LX_pfeil:914565491606052885> Schaltet Werbung für euren Social Media in <#851073441775747082>!
<:LX_pfeil:914565491606052885> Ihr seit direkt über dem Team gelistet!`)
                        .setImage('https://cdn.discordapp.com/attachments/928761686163337278/932744826263334922/unknown.png')
                        .setFooter("Nutze #gbset tag monat um auch deinen Geburtstag zu feiern.", 'https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif')
                    channel.send({
                        embeds: [embed]
                    }).catch(console.error());
                }
            });
        };
    }, 60 * 1000 * 60);
})
