
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "grab",
  aliases: ["pick", "get"],
  category: "Image",
  description: "Shows simp img with user avatar",
  usage: "simp <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Grab")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/grab?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
