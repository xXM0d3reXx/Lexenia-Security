const {
    MessageActionRow,
    MessageEmbed,
    MessageSelectMenu,
    MessageButton,
    Interaction
} = require("discord.js");

module.exports = {
    name: 'support',
    description: 'Supports a member',
    execute: async (client, message, prefix, Discord) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.reply("Ich weis zwar nicht von wo du diesen Command hast, aber bitte unterlasse es diesen zu nutzen. Danke").catch(console.error());
        }
        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Nichts ausgewählt')
                .addOptions([{
                        label: 'Dm Werbung Reporten',
                        emoji: {
                            "name": "1️⃣"
                        },
                        value: '➽║ Dm Werbung Reporten',
                    },
                    {
                        label: 'Partnerschaft beantragen',
                        emoji: {
                            "name": "2️⃣"
                        },
                        value: '➽║ Partnerschaft beantragen',
                    },
                    {
                        label: 'User Reporten',
                        emoji: {
                            "name": "3️⃣"
                        },
                        value: '➽║ User Reporten',
                    },
                    {
                        label: 'Eigene Rolle',
                        emoji: {
                            "name": "4️⃣"
                        },
                        value: '➽║ Eigene Rolle',
                    },
                    {
                        label: 'Allgemein',
                        emoji: {
                            "name": "5️⃣"
                        },
                        value: '➽║ Allgemein',
                    },
                ]),
            );
        const embed = new MessageEmbed()
            .setTitle(`**Du brauchst Hilfe oder hast eine Frage? **`)
            .setDescription(`Dann wähle eine der unten aufgelisteten Kategorien aus und ein Teammitglied wird sich zeitnah um dich kümmern!`)
            .setColor("GREY")

        message.channel.send({
            embeds: [embed],
            components: [row]
        }).catch(console.error());
    }
}