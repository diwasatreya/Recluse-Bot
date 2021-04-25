const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`; //Color Name In CAPS - RANDOM For Random
const Scraper = require("mal-scraper"); //npm i mal-scraper

//By Atreya YT

module.exports = {
    name: "anime",
    category: "info",
    description: "Anime Information!",
    usage: "Anime <Name>",
    run: async (client, message, args) => {

        //Start

        let Text = args.join(" ");

        if (!Text) return message.channel.send(`<:recluse13:827728042448388096> | Please Give anime character to search information about that!`);

        if (Text.length > 200) return message.channel.send(`Text Limit - 200`);

        let Msg = await message.channel.send(`**Searching It For You <:recluse14:827755244167495720> please wait for while**`);

        let Replaced = Text.replace(/ +/g, " ");

        await Msg.delete();

        let Anime;

        let Embed;

        try {

        Anime = await Scraper.getInfoFromName(Replaced);

        if (!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "None";

        Embed = new MessageEmbed()
        .setColor(Color || "RANDOM")
        .setURL(Anime.url)
        .setTitle(Anime.title)
        .setDescription(Anime.synopsis)
        .addField(`Type`, Anime.type, true)
        .addField(`Status`, Anime.status, true)
        .addField(`Premiered`, Anime.premiered, true)
        .addField(`Episodes`, Anime.episodes, true)
        .addField(`Duration`, Anime.duration, true)
        .addField(`Popularity`, Anime.popularity, true)
        .addField(`Gneres`, Anime.genres.join(", "))
        .setThumbnail(Anime.picture)
        .setFooter(`Score - ${Anime.score}`)
        .setTimestamp();

        } catch (error) {
          return message.channel.send(`No Anime Found!`);
        };

        return message.channel.send(Embed);

        //End

    }
};
