const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "shame",
  aliases: ["dockofshame" ,"shm"],
  category: "Image",
  description: "Return A Shame Image!",
  usage: "Shame | <Mention Or ID>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/dockofshame?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
