const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "tickle",
  aliases: [],
  category: "Image",
  description: "Return A Random Tickle!",
  usage: "Tickle",
  run: async (client, message, args) => {

    const Data = await Random.GetAnimeImage({ Anime: "tickle", Color: Color });
    
    return message.channel.send(Data);
  }
};
