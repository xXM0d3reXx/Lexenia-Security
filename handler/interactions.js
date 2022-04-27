// INPUT
const {
    MessageActionRow,
    MessageEmbed,
    MessageSelectMenu,
    MessageButton,
    Interaction,
    Discord
} = require('discord.js')
const client = require("../index").Client

// COOLDOWN
const {
    setTimeout
} = require('timers')

// BUTTON HANDLING
client.on("interactionCreate", button => {
    if (button.isButton()) {
        if (button.member.roles.cache.get('851078241199849512')) {
            if (button.customId === "close1") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close2") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close3") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close4") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close5") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
        } else if (button.member.roles.cache.get('912136690976571402')) {
            if (button.customId === "close1") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close2") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close3") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close4") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close5") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
        } else if (button.member.roles.cache.get('936696875107614720')) {
            if (button.customId === "close1") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close2") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close3") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close4") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
            if (button.customId === "close5") button.reply("Ticket wird geschlossen.").then(ch => {
                setTimeout(() => button.channel.delete().catch(console.error()), 3000)
            }).catch(console.error);
        } else {
            button.reply("Du kannst das Ticket nicht schließen.").catch(console.error)
        }
    }
})

// INTERACTION HANDLING
client.on('interactionCreate', Interaction => {
    if (Interaction.isSelectMenu()) {
        if (Interaction.customId === "select") {
            const value = Interaction.values[0]
            Interaction.deferUpdate()
            if (value == '➽║ Dm Werbung Reporten') {
                try {
                    const embed = new MessageEmbed()
                        .setTitle(`**Willkommen in deinem Ticket um DM-Werbung zu reporten <a:LX_wave:955438790716043284>**`)
                        .setDescription(`Bitte schick uns doch einen Screenshot der DM-Werbung, einen Screenshot eurer gemeinsamen Servern, sowie die ID des DM-Werbers.
Ein Teammitglied wird sich dann so schnell wie möglich um dein Ticket kümmern 😁`)
                        .setColor("RANDOM")
                    Interaction.guild.channels.create(`${value} + ${Interaction.user.username}`, {
                        type: "text",
                        parent: '851073689432883251',
                    }).then(channel => {
                        channel.permissionOverwrites.set([{
                            id: Interaction.user.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.cache.get('851078241199849512'),
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        ]).catch(console.error)
                        channel.send({
                            embeds: [embed],
                            content: `<@${Interaction.user.id}> <@&851078241199849512>`,
                            components: [{
                                type: 1,
                                components: [{
                                    type: 2,
                                    style: 4,
                                    label: "Close",
                                    custom_id: "close1"
                                }]
                            }]
                        }).catch(console.error)
                    }).catch(console.error)
                } catch (error) {
                    console.error
                }
            }
            if (value == '➽║ Partnerschaft beantragen') {
                try {
                    const embed = new MessageEmbed()
                        .setTitle(`**Willkommen in deinem Ticket zum beantragen einer Partnerschaft <a:LX_wave:955438790716043284>**`)
                        .setDescription(`Bitte lies dir doch zuerst einmal <#851073508536090675> durch. Solltest du alle Voraussetzungen erfüllen, so schreibe bitte einen unserer <@&912136690976571402> privat an. Diese Nachricht sollte eine kleine Vorstellung deines Servers, sowie den Serverinvite enthalten. Den Rest regelt dann der Partnermanager mit dir.
Solltest du ein Problem haben, so schildere uns dies doch hier im Ticket. Ein Teammitglied wird sich dann so schnell wie möglich um dein Ticket kümmern 😁 `)
                        .setColor("RANDOM")
                    Interaction.guild.channels.create(`${value} + ${Interaction.user.username}`, {
                        type: "text",
                        parent: '851073689432883251',
                    }).then(channel => {
                        channel.permissionOverwrites.set([{
                            id: Interaction.user.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.cache.get('912136690976571402'),
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        ]).catch(console.error)
                        channel.send({
                            embeds: [embed],
                            content: `<@${Interaction.user.id}> <@&912136690976571402>`,
                            components: [{
                                type: 1,
                                components: [{
                                    type: 2,
                                    style: 4,
                                    label: "Close",
                                    custom_id: "close2"
                                }]
                            }]
                        }).catch(console.error)
                    }).catch(console.error)
                } catch (error) {
                    console.error
                }

            }
            if (value == '➽║ User Reporten') {
                try {
                    const embed = new MessageEmbed()
                        .setTitle(`**Willkommen in deinem Ticket zum Reporten eines Mitgliedes <a:LX_wave:955438790716043284>**`)
                        .setDescription(`Um unseren Teammitgliedern etwas Arbeit abzunehmen, schilder doch bitte kurz die Situation und unterlege diese am besten mit Beweisen (am besten Screenshots). 
Ein Teammitglied wird sich dann so schnell wie möglich um dein Ticket kümmern 😁`)
                        .setColor("RANDOM")
                    Interaction.guild.channels.create(`${value} + ${Interaction.user.username}`, {
                        type: "text",
                        parent: '851073689432883251',
                    }).then(channel => {
                        channel.permissionOverwrites.set([{
                            id: Interaction.user.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.cache.get('851078241199849512'),
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        ]).catch(console.error)
                        channel.send({
                            embeds: [embed],
                            content: `<@${Interaction.user.id}> <@&851078241199849512>`,
                            components: [{
                                type: 1,
                                components: [{
                                    type: 2,
                                    style: 4,
                                    label: "Close",
                                    custom_id: "close3"
                                }]
                            }]
                        }).catch(console.error)
                    }).catch(console.error)
                } catch (error) {
                    console.error
                }
            }
            if (value == '➽║ Eigene Rolle') {
                try {
                    const embed = new MessageEmbed()
                        .setTitle(`**Willkommen in deinem Ticket zum Erstellen deiner eigenen Rollen <a:LX_wave:955438790716043284>**`)
                        .setDescription(`Bitte schick uns zuerst einen Screenshot der zeigt, dass du unseren Server 2 mal boostest. Zudem kannst du uns auch direkt den Namen deiner Rolle, das Rollenicon, sowie die Rollenfarben mitteilen. 
Ein Teammitglied wird sich dann so schnell wie möglich um dein Ticket kümmern 😁`)
                        .setColor("RANDOM")
                    Interaction.guild.channels.create(`${value} + ${Interaction.user.username}`, {
                        type: "text",
                        parent: '851073689432883251',
                    }).then(channel => {
                        channel.permissionOverwrites.set([{
                            id: Interaction.user.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.cache.get('851078241199849512'),
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        ]).catch(console.error)
                        channel.send({
                            embeds: [embed],
                            content: `<@${Interaction.user.id}> <@&851078241199849512>`,
                            components: [{
                                type: 1,
                                components: [{
                                    type: 2,
                                    style: 4,
                                    label: "Close",
                                    custom_id: "close4"
                                }]
                            }]
                        }).catch(console.error)
                    }).catch(console.error)
                } catch (error) {
                    console.error
                }
            }
            if (value == '➽║ Allgemein') {
                try {
                    const embed = new MessageEmbed()
                        .setTitle(`**Willkommen in deinem Support-Ticket <a:LX_wave:955438790716043284>**`)
                        .setDescription(`Bitte schildere uns kurz dein Anliegen. Ein Teammitglied wird sich dann so schnell wie möglich um dein Ticket kümmern 😁`)
                        .setColor("RANDOM")
                    Interaction.guild.channels.create(`${value} + ${Interaction.user.username}`, {
                        type: "text",
                        parent: '851073689432883251',
                    }).then(channel => {
                        channel.permissionOverwrites.set([{
                            id: Interaction.user.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        {
                            id: Interaction.guild.roles.cache.get('851078241199849512'),
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                        },
                        ]).catch(console.error)
                        channel.send({
                            embeds: [embed],
                            content: `<@${Interaction.user.id}> <@&851078241199849512>`,
                            components: [{
                                type: 1,
                                components: [{
                                    type: 2,
                                    style: 4,
                                    label: "Close",
                                    custom_id: "close5"
                                }]
                            }]
                        }).catch(console.error)
                    }).catch(console.error)
                } catch (error) {
                    console.error
                }
            }
        }
    }
})