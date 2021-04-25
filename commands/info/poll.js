const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "poll",
        description: "polling",
        category: "info",
        usage: "[question]",
        
       
   
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("**You Do Not Have Sufficient Permissions! - [MANAGE_GUILD]**");

        if (!args[0])
            return message.channel.send("**Please Enter A Query!**");

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Poll`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);

        await msg.react('<a:up:834016242632359967>');
        await msg.react('<a:down:834018119856029746>');

        message.delete({ timeout: 1000 });
    }
}

