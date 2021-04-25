
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "eternity",
  aliases: ["timecard", "eter"],
  category: "Image",
  description: "Return message in eternity way",
  usage: "eternity <Text>",
  run: async (client, message, args) => {
    
    const Value = args.join(" ");

    if (!Value || Value.length > 150) return message.channel.send("<:recluse5:827723187981778945> |  Please Give Text And Make Sure Its Not 150+ Characters Long!"); 

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Eternity (" + message.author.username + ")")
    .setImage(encodeURI(`https://api.lgdstutorials.repl.co/spongebob-timecard?text==${Value}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
