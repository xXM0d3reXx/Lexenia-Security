const client = require("../index").Client
// COOLDOWN
const {
    setInterval
} = require('timers')
client.on("ready", () => {


    const guild = client.guilds.cache.get("851071074736144415");
    var channel = guild.channels.cache.get("851073481666985994");
    var text = (`<a:LX_blackheart:912704066042359839>**__•𝕃𝔼𝕏𝔼ℕ𝕀𝔸•__**<a:LX_blackheart:912704066042359839>

<:LX_blackarrow:945413748535984148> |  **__Das sind wir:__**
    
<:LX_lightlila:945413928291270707> Ein kleiner Server mit einer **kleinen** aber **aktiven** Community.
<:LX_lightlila:945413928291270707> Wir nehmen jeden mit **offenen Armen** auf und gehen **nett** und **freundlich** mit jedem um.
<:LX_lightlila:945413928291270707> Zusätzlich habe wir noch ein **gut ausgewähltes** und **freundliches** Serverteam.
    
<:LX_blackarrow:945413748535984148> | **__Das bieten wir euch:__**
    
<:LX_lila:945413637433077841> **nette** und **aktive** Community.
<:LX_lila:945413637433077841> eine **hohe Voiceaktivität**.
<:LX_lila:945413637433077841> viel **Abwechslung** durch **Minigames, Events** und mehr.
<:LX_lila:945413637433077841> **viele Möglichkeiten** euch mit **anderen auszutauschen**.
<:LX_lila:945413637433077841> **viele** und **coole Boostervorteile**.
<:LX_lila:945413637433077841> **verschiedene Chancen Werbung** zu machen.
<:LX_lila:945413637433077841> **Belohnungen für die Aktivität** bei uns.
<:LX_lila:945413637433077841> **Hilfe** bei **euren Problemen**.
    
<:LX_blackarrow:945413748535984148>  | **Unser Fokus liegt auf EUCH!**
    
<:LX_lightlila:945413928291270707> Also **joint gerne**, denn bei uns ist **jeder wilkommen!**
<:LX_lightlila:945413928291270707> **Hoffentlich** konnten wir dich **überzeugen zu joinen** 😄
    
https://discord.gg/lexenia`);

    setInterval(async function () {

        var hour3 = new Date().getHours()
        if (hour3 === 1) {
            channel.send(text).catch(console.error())
        };
        var hour9 = new Date().getHours()
        if (hour9 === 7) {
            channel.send(text).catch(console.error())
        };
        var hour15 = new Date().getHours()
        if (hour15 === 13) {
            channel.send(text).catch(console.error())
        };
        var hour21 = new Date().getHours()
        if (hour21 === 19) {
            channel.send(text).catch(console.error())
        };
    }, 60 * 1000 * 60);
})