const Color = "RANDOM";
const Discord = require("discord.js");
const Random = require("srod-v2");

module.exports = {
  name: "pornhubcmt",
  category: "Image",
  aliases: ["ph", "phc"],
  description: "Return A achievement Image!",
  usage: "ph | <Text>",
  run: async (bot, message, args) => {

        let user = await message.mentions.members.first()
        let text = args.join(" ");

        if(user){
            text = args.slice(1).join(" ");
        } else {
            user = message.author;
        }

        if(!text){
            return message.channel.send("<:recluse11:827727706959249439> **Enter Text!** to comment ");
        }

        let m = await message.channel.send(" <:recluse13:827728042448388096> **Please Wait...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${user.username}&image=${user.displayAvatarURL({ format: "png", size: 512 })}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "phcomment.png");
            message.channel.send(attachment);
            m.delete({ timeout: 1000 });
        } catch(e){
            m.edit("<:recluse11:827727706959249439> Error, Try Again! Mention Someone");
        }
    }
};
