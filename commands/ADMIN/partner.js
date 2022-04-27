const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: 'partner',
    description: 'Gives user the Partner role',
    execute: async (client, message, args, prefix, Discord) => {
        const fail = new MessageEmbed()
            .setTitle(`**Moderation** ➽║ **partner**`)
            .setColor("RED")
            .setDescription("Mit diesem Befehl kann ein Partner Manager einem Mitglied die Partner Rolle vergeben.")
            .addFields(
                { name: `\`Anwendung\``, value: `➽ #partner @User\n➽ #partner UserId`, inline: true },
                { name: `\`Beispiel\``, value: `➽ #partner ${client.user}\n➽ #partner ${client.user.id}`, inline: true },
                { name: `\`Benötigte Permissions\``, value: "➽ Partner Manager" }
            )
            .setTimestamp();
        // Assing partner role
        const guild = client.guilds.cache.get('851071074736144415');
        const role = guild.roles.cache.get('915369355087339570')
        // First argument is the user
        let partner = (message.mentions.members.first() || message.guild.members.cache.get(args[0]));
        // Checking The Permissions
        if (!message.member.roles.cache.some(role => role.id === '912136690976571402')) {
            return message.reply({ embeds: [fail] }).catch(console.error())
        } else if (!partner) {
            return message.reply({ embeds: [fail] }).catch(console.error());
        } else if (partner.roles.cache.some(role => role.id === '915369355087339570')) {
            return message.reply({ embeds: [fail] }).catch(console.error())
        }
        // Running the Command

        partner.roles.add(role).catch(console.error());
        message.reply(`<a:LX_haken:912459313518379028> ➽║ ${partner} hat die Partner Rolle bekommen.`).catch(console.error())
    }
}