
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "dislike",
  aliases: [""],
  category: "Image",
  description: "Say to dislike user",
  usage: "dislike <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Dislike")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/dislike?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
