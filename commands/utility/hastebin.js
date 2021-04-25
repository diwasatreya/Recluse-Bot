const discord = require("discord.js")
const { RichEmbed } = require("discord.js")
const moment = require("moment")
const hastebin = require('hastebin-gen');

module.exports = {
        name: "hastebin",
        description: "Get link of Your given Code or Text as Hastebin.",
        usage: `hastebin <code/text>`,
        category: "utility",
        aliases: ["haste"],
    run: async (client, message, args) => {
      
      if(!args.join(" ")) return message.channel.send(`Please write a Valid Code or Text.`);
      
      hastebin(args.join(" "), { extension: 'rage' }).then(haste => {
    message.channel.send(haste);
}).catch(error => {
    message.channel.send(`\`\`\`\n-ERROR-\n\`\`\`${error}`);
      });
      }
}
