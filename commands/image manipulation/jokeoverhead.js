
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "grab",
  aliases: ["joh", "jokeover"],
  category: "Image",
  description: "Shows joh img with user avatar",
  usage: "joh <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Joke Over Head")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/joke-over-head?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
