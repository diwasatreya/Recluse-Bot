
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "drake",
  aliases: [""],
  category: "Image",
  description: "drake <up message> <downmessage>",
  usage: "drake saying_Bot Recluse",
  run: async (client, message, args) => {
    const Down = args.slice(0).join(" ");

    if (!Down || Down.length > 150) return message.channel.send("<:recluse5:827723187981778945> | Please give up message");

    const Value = args.slice(1).join(" ");

    if (!Value || Value.length > 150) return message.channel.send("<:recluse5:827723187981778945> | Please give down message"); 
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Drake")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/drake?top=${Down}&bottom=${Value}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
