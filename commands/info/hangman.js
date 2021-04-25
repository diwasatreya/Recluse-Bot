const { hangman } = require('reconlx')

module.exports = {
    name : 'hangman',
    category: "mini-games",
  aliases: ["hm", "hangm"],
  usage: "(prefix)hangman <channel> <word>",
  description: "Play hangman with our own given words",
    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('<:recluse11:827727706959249439> | You need manage messages permission.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('<:recluse8:827723422074535936> Please specify a channel  ')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('<:recluse8:827723422074535936>  Please specify a word to guess.')

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
    }
}
