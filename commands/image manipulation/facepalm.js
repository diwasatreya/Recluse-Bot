const Canvas = require("canvas");
const Discord = require("discord.js");

module.exports = {
    
        name: "facepalm",
        aliases: ['fp'],
        category: 'Image',
        description: "Shows Facepalmed User",
        usage: "[username | nickname | mention | ID] (optional)",
        
    run: async (bot, message, args) => {
        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member,
        m = await message.channel.send("<:recluse6:827723300457152512> | **Please Wait...**"),
        canvas = Canvas.createCanvas(632, 357),
        ctx = canvas.getContext("2d");
        
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 632, 357);

        let avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: "png", size: 512 }));
        ctx.drawImage(avatar, 199, 112, 235, 235);
        
        let layer = await Canvas.loadImage('https://raw.githubusercontent.com/Androz2091/AtlantaBot/master/assets/img/facepalm.png');
        ctx.drawImage(layer, 0, 0, 632, 357);

        let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "facepalm.png");

        m.delete({ timeout: 3000 });
        message.channel.send(attachment);
    }
};
