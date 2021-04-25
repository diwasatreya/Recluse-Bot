
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "hitler",
  aliases: [""],
  category: "Image",
  description: "Shows more worse than hitler",
  usage: "hitler <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Hitler +")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/hitler?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
