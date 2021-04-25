const urban = require('relevant-urban');
const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "urbandictionary",
        aliases: ["ud", "urban"],
        category: "info",
        description: "Give information about urban words!",
        usage: "[word]",
        
    
    run: async (bot, message, args) => {
        if(!args[0])
        return message.channel.send("<:recluse6:827723300457152512> | Please Enter Something To Search");

        let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium";
        try {
            let res = await urban(args.join(' '))
                if (!res) return message.channel.send("No results found for this topic, sorry!");
                let { word, urbanURL, definition, example, thumbsUp, thumbsDown, author } = res;

                let embed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(`Urban - ${word}`)
                    .setThumbnail(image)
                    .setDescription(`**Meaning:**\n*${definition || "No meaning"}*\n\n**Example:**\n*${example || "No Example"}*`)
                    .addField('**Rating:**', `**\`Upvotes: ${thumbsUp} | Downvotes: ${thumbsDown}\`**`)
                    .addField("**Link**",  `[link to ${word}](${urbanURL})`)
                    .addField("**Author:**", `${author || "unknown"}`)
                    .setTimestamp()

                message.channel.send(embed)
            
        } catch (e) {
            console.log(e)
            return message.channel.send("looks like i've broken! Try again")
        }
    }
}
