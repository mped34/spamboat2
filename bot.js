const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("545584775067598848")
setInterval(function() {
channel.send(`spam 
spam spam spam spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
