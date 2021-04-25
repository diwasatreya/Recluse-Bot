const { tictactoe } = require('reconlx')

module.exports = {
    name : 'tictactoe',
    aliases: ["cross", "ttt"],
  category: "mini-games",
  description: "Play TicTacToe with friends",
  usage: "ttt <user>",
    run : async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('<:recluse7:827723345650647060> | Please specify a member ')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}
