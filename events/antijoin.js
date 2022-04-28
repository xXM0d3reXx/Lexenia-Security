const client = require("../index").Client
const {
    antijoin
} = require("../models/Collection");

client.on("guildMemberAdd", async (member) => {
    const getCollection = antijoin.get(member.guild.id);
    if (!getCollection) return;
    if (!getCollection.includes(member.user)) {
        getCollection.push(member.user)
    }
    try {
        member.send("Unser Antijoin wegen raid war an. Falls Sie zu unrecht gekickt wurden, joinen sie bei zeiten einfach nochmal.")
    } catch (err) {
        console.log(err)
    }
    try {
        member.kick("Antijoin war an.")
    } catch (err) {
        console.log(err)
    }
})
