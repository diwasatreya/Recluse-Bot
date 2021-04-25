const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "stonks",
  aliases: ["stks"],
  category: "Image",
  description: "Return A Stonks Image!",
  usage: "Stonks | <Mention Or ID>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/stonks?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
