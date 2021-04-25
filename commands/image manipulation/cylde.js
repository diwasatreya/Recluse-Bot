
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "clyde",
  aliases: ["clydee", "clydebot"],
  category: "Image",
  description: "Return clyde message",
  usage: "clyde <Text>",
  run: async (client, message, args) => {
    
    const Value = args.join(" ");

    if (!Value || Value.length > 150) return message.channel.send("<:recluse5:827723187981778945> | Please Give Text And Make Sure Its Not 150+ Characters Long!"); 

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Clyde (" + message.author.username + ")")
    .setImage(encodeURI(`https://ctk-api.herokuapp.com/clyde/${Value}%20`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
