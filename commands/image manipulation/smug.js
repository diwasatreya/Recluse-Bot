
const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "smug",
  aliases: [],
  category: "Image",
  description: "Return A Random Smug!",
  usage: "Smug",
  run: async (client, message, args) => {

    const Data = await Random.GetAnimeImage({ Anime: "smug", Color: Color });
    
    return message.channel.send(Data);
  }
};
