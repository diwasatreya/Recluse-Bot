
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "like",
  aliases: [""],
  category: "Image",
  description: "Say to like user",
  usage: "like <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Like")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/like?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
