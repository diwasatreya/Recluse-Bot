const Discord = require("discord.js")
const fetch = require("node-fetch");

module.exports = {
    
        name: "tweet",
        
        category: "Image",
        description : "Sends A Tweet",
        usage: "[username] <text>",
        
   
    run: async(bot, message, args) => {

        let user = args[0];
        let text = args.slice(1).join(" ");

        let m = await message.channel.send("**Please wait...**");

        if(!user){
            return m.edit("<:recluse6:827723300457152512> | **You Have To Enter Someone's Twitter Nickname!**");
        }

        if(!text){
            return m.edit("**You must enter a message!**");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(`**New tweet published by ${user}**`, attachment);
            m.delete({ timeout: 5000});
        } catch(e){
            m.edit("Error, Try Again! Mention Someone");
        }
    }
};
