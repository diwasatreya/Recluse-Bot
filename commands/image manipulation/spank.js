
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "spank",
  aliases: [ "" ],
  category: "Image",
  description: "spank a  user fast",
  usage: "spank <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!Member) return message.channel.send("Please Mention Or Give ID Of A Member!")

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Spanked")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/spank?face=${message.author.avatarURL({ format: "png" })}&face2=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
