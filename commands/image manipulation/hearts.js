
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "hearts",
  aliases: ["love"],
  category: "Image",
  description: "Shows hearts in img",
  usage: "hearts <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Hearts")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/hearts?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
