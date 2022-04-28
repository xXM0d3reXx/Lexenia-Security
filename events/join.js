const client = require("../index").Client
const safeshema = require('../models/safe-shema');
const safe = '912195069627498567'
const {
    antijoin
} = require("../models/Collection");
const {
    Captcha
} = require("captcha-canvas");
const {
    MessageAttachment,
    MessageEmbed
} = require("discord.js");
client.on('guildMemberAdd', async (member) => {

    //CACHE
    const guild = client.guilds.cache.get("851071074736144415"); //GUILD
    var chan = guild.channels.cache.get("851073890795913286"); //MAINCHAT
    var channel = guild.channels.cache.get("851075521362133032"); //LOGGING
    var channell = guild.channels.cache.get("928091093189423154"); //VERIFY


    //ANTIRAID ON
    const getCollection = antijoin.get(member.guild.id);
    if (getCollection) return;

    //SAFE USER
    safeshema.find({
        userId: member.id
    }, async (err, data) => {
        if (err) {console.log(err)}
        if (data.length == 1) {
            member.roles.add(safe).catch(console.error())
            chan.send(`Heeyy <@${member.id}>, willkommen auf 𝕃𝔼𝕏𝔼ℕ𝕀𝔸! <a:LX_wave:912478975421481030>
Wir hoffen du wirst hier Spaß haben! <a:LX_laughboom:912460061052391516>`).catch(console.error())
        }


        if (data.length == 0) {
            //TO YOUNG
            if (Date.now() - member.user.createdAt < 1000 * 60 * 60 * 24 * 14) {
                await channel.send(`<@${member.id}>, ${member.id} ist zu jung.`).catch(console.error());
                member.kick("Account ist zu jung").catch(console.error())

                //VERIFY
            } else if (Date.now() - member.user.createdAt > 1000 * 60 * 60 * 24 * 14 + 1) {
                const captcha = new Captcha();
                captcha.async = true;
                captcha.addDecoy();
                captcha.drawTrace();
                captcha.drawCaptcha();

                const captchaAttachment = new MessageAttachment(
                    await captcha.png,
                    "captcha.png"
                );

                const captchaEmbed = new MessageEmbed()
                    .setTitle(`<a:LX_allaarrrmmmm:921527940439740486> **Verifizierung** <a:LX_allaarrrmmmm:921527940439740486>`)
                    .setDescription(`➽║ <@${member.id}> Aus Sicherheit für Sie und für uns vervollständigen Sie bitte folgenden Captcha. Danke!`)
                    .setColor("RANDOM")
                    .setImage("attachment://captcha.png")
                    .setFooter("Falls du keinen Captcha auffindest, bitte ein Team Mitglied pingen um Verifiziert zu werden.", 'https://cdn.discordapp.com/attachments/913146795532640326/925545664438480937/lexenia-pb.gif')


                //JOIN MESSAGE
                const msg = await channell.send({
                    files: [captchaAttachment],
                    embeds: [captchaEmbed],
                }).catch(console.error());


                //WRONG ANSWER
                const filter = (message) => {
                    if (message.author.id !== member.id) return;
                    if (message.content === captcha.text) return true;
                    else channell.send(`<a:LX_kreuz:917141623777939537> ➽║ <@${member.id}> Das von Ihnen angegebene Captcha ist falsch. Versuchen Sie es bitte erneut.`).catch(console.error())
                }

                //TIMING
                try {
                    const response = await msg.channel.awaitMessages({
                        filter,
                        max: 1,
                        time: 300000,
                        errors: ["time"],
                    });
                    //ROLES ADD AND ERROR CHECKING
                    if (response) {
                        await member.roles.add(safe).catch(console.error());
                        chan.send(`Heeyy <@${member.id}>, willkommen auf 𝕃𝔼𝕏𝔼ℕ𝕀𝔸! <a:LX_wave:912478975421481030>
Wir hoffen du wirst hier Spaß haben! <a:LX_laughboom:912460061052391516>`).catch(console.error());
                        channell.send(`<a:LX_haken:912459313518379028> ➽║ Der User <@${member.id}> wurde erfolgreich verifiziert!`).catch(console.error());
                        data = new safeshema({
                            name: member.username,
                            userId: member.id,
                            guildId: msg.guild.id
                        });
                    }
                    data.save();
                } catch (err) {
                    if (member.roles.cache.some(role => role.id === '912195069627498567')) {
                        return
                    } else {
                        return channell.send(`<a:LX_kreuz:917141623777939537> ➽║ <@${member.id}> Sie haben sich nicht in der von uns vorgegeben zeit Verifiziert.`).catch(console.error());
                    }
                }
            }
        }
    })
});
