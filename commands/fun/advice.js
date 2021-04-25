const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = {
  name: "advice",
    aliases: ['motivation'],
    category: "misc",
    usage: "advice",
    description: "Gives you advice",
  run: async (client, message, args) => {
    
    let data = await random.getAdvice()
    message.channel.send(data)
    
  }
}
