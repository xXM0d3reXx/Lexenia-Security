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
                    if (err) return console.log(err);

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
                            const record = await sort.map((v) => {
                                const topdata = new msgtop({
                                    guildId: "851071074736144415",
                                    countId: v.countId,
                                    lb: "all"
                                });
                                topdata.save();
                            });
                            let embed = new MessageEmbed()
                            try {
                                embed.setDescription(`${mapping} ` + ` ${mappings}`)
                                embed.setColor("RANDOM")

                                embed.setTitle("Heutige Nachrichten Stats");
                                embed.setThumbnail("https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif");
                            } catch (err) { console.log(err) }
                            msgSchema.find({
                                lb: "all"
                            }).sort([
                                ['countId', 'descending']
                            ]).exec((err, res) => {
                                if (err) console.log(err)
                                try {
                                    embed.addFields(
                                        {
                                            name: `\`🥇\` ${res[0].name}`,
                                            value: `${res[0].countId + 1} Nachrichten`,
                                            inline: true,
                                        },
                                        {
                                            name: `\`🥈\` ${res[1].name}`,
                                            value: `${res[1].countId + 1} Nachrichten`,
                                            inline: true,
                                        },
                                        {
                                            name: `\`🥉\` ${res[2].name}`,
                                            value: `${res[2].countId + 1} Nachrichten`,
                                            inline: true,
                                        }
                                    );
                                    for (i = 3; i != 12; i++) {
                                        embed.addFields([
                                            {
                                                name: `\`${i + 1}.\` ${res[i].name}`,
                                                value: `${res[i].countId + 1} Nachrichten`,
                                                inline: true,
                                            },
                                        ]);
                                    }
                                } catch (err) { console.log(err) };
                                try {
                                    return channel.send({
                                        embeds: [embed]
                                    })
                                } catch (err) { console.log(err) }
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
                            } catch (err) { console.log(err) }
                        };
                    }
                })
                setTimeout(() => {

                    msgSchema.deleteMany({
                        guildId: "851071074736144415"
                    }, async (err, data) => {
                        if (err) return console.log(err)
                    })

                    guildSchema.deleteMany({
                        guildId: "851071074736144415"
                    }, async (err, data) => {
                        if (err) return console.log(err)
                    })
                }, 5000)
            };
        } catch (err) { console.log(err) }
    }, 60 * 1000 * 60);
})