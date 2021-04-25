
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "meeting",
  aliases: ["amongusmeeting", "mtg"],
  category: "Image",
  description: "Return A Among Us Meeting Image!",
  usage: "Meeting <Text>",
  run: async (client, message, args) => {
    
    const Value = args.join(" ");

    if (!Value || Value.length > 150) return message.channel.send("<:recluse2:827722972923428904> |  Please Give Meeting Text And Make Sure Its Not 150+ Characters Long!"); 

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Emergency Meeting (" + message.author.username + ")")
    .setImage(encodeURI(`https://vacefron.nl/api/emergencymeeting?text=${Value}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
