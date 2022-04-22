// INPUT
const guildSchema = require('../models/msg-guild');
const msgSchema = require('../models/msg-shema');
const msgtop = require('../models/msg-top');
const client = require("../index").Client
const {
    MessageEmbed
} = require("discord.js");
// COOLDOWN
const {
    setInterval
} = require('timers')

// ACTION
client.on("ready", () => {
    setInterval(async function () {
        try {
            var hour24 = new Date().getHours()
            if (hour24 === 22) {

                const guild = client.guilds.cache.get("851071074736144415");
                const channel = guild.channels.cache.get("851073890795913286");

                //ENDSCORE MSG GUILD
                guildSchema.find({ guildId: "851071074736144415" }, async (err, data) => {
                    if (err) return console.error(err);

                    const leader = await msgtop.find({
                        lb: "all"
                    }).sort([
                        ['countId', 'descending']
                    ]).limit(1)


                    if (leader.length === 1) {
                        const sorta = leader.sort((a, b) => b.Counts - a.Counts);
                        const mappings = await sorta.map((vv) => `Rekord liegt bei ${vv?.countId} <a:LX_chat:926269479875387442>`)

                        if (data.length > 0) {
                            const sort = data.sort((a, b) => b.Counts - a.Counts);
                            const mapping = await sort.map((v) => `<a:LX_announcement:912787060522381343> ➽║ Heute wurden insgesamt ${v.countId + 1} Nachrichten versendet!`);
                            let embed = new MessageEmbed()
                            try {
                                embed.setDescription(`${mapping} ` + ` ${mappings}`)
                                embed.setColor("RANDOM")

                                embed.setTitle("Heutige Nachrichten Stats");
                                embed.setThumbnail("https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif");
                            } catch (err) { console.error(err) }
                            msgSchema.find({
                                lb: "all"
                            }).sort([
                                ['countId', 'descending']
                            ]).exec((err, res) => {
                                if (err) console.error(err)
                                let end = 5;
                                let endf = 1;
                                let ends = 2;
                                let endt = 3;
                                let start = 3;
                                let first = 0;
                                let second = 1;
                                let third = 2;
                                try {
                                    for (f = first; f < endf; f++) {
                                        embed.addFields({
                                            name: `\`🥇\` ${res[f].name}`,
                                            value: `${res[f].countId + 1} Nachrichten`,
                                            inline: true
                                        })
                                    }
                                } catch (err) { console.error(err) };
                                try {
                                    for (s = second; s < ends; s++) {
                                        embed.addFields({
                                            name: `\`🥈\` ${res[s].name}`,
                                            value: `${res[s].countId + 1} Nachrichten`,
                                            inline: true
                                        })
                                    }
                                } catch (err) { console.error(err) };
                                try {
                                    for (t = third; t < endt; t++) {
                                        embed.addFields({
                                            name: `\`🥉\` ${res[t].name}`,
                                            value: `${res[t].countId + 1} Nachrichten`,
                                            inline: true
                                        })
                                    }
                                } catch (err) { console.error(err) };
                                try {
                                    for (i = start; i < end; i++) {
                                        embed.addFields([{
                                            name: `\`${i + 1}.\` ${res[i].name}`,
                                            value: `${res[i].countId + 1} Nachrichten`,
                                            inline: true
                                        }])
                                    }
                                } catch (err) { console.error(err) };
                                try {
                                    return channel.send({
                                        embeds: [embed]
                                    })
                                } catch (err) { console.error(err) }
                            })
                        } else {
                            const samapping = await sorta.map((vv) => `<a:LX_announcement:912787060522381343> ➽║ Heute wurde keine Nachricht versendet! Rekord liegt bei ${vv?.countId} <a:LX_chat:926269479875387442>`);
                            let embedss = new MessageEmbed()
                                .setDescription(`${samapping}`)
                                .setColor("RANDOM")

                            try {
                                return channel.send({
                                    embeds: [embedss]
                                })
                            } catch (err) { console.error(err) }
                        };
                    }
                })
                setTimeout(() => {
                    //ENDSCORE MSG GUILD DELETE
                    guildSchema.find({}, async (err, res) => {

                        if (err) return console.error(err)

                        const sort = res.sort((a, b) => b.Counts - a.Counts);
                        const mapping = await sort.map((v) => {

                            if (res) {
                                const topdata = new msgtop({
                                    guildId: "851071074736144415",
                                    countId: v.countId,
                                    lb: "all"
                                });
                                topdata.save();
                            }
                        });
                    })
                    //ENDSCORE MSG USER DELETE
                    msgSchema.deleteMany({
                        guildId: "851071074736144415"
                    }, async (err, data) => {
                        if (err) return console.error(err)
                    })

                    guildSchema.deleteMany({
                        guildId: "851071074736144415"
                    }, async (err, data) => {
                        if (err) return console.error(err)
                    })
                }, 5000)
            };
        } catch (err) { console.error(err) }
    }, 60 * 1000 * 60);
})