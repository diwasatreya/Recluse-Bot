const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Description is not provided join support server for help")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied Join Support server for help")
        .addField("Aliases", "```" + command.aliases + "```"|| "There is no aliases")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#000000")
        .setFooter(`Join our support server `);

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription("**Hi Stranger** I am Recluse <:recluse6:827723300457152512>. Do `?help <command>` to see aliases and description of commands")
       
        .setColor("#000000")
        .setImage('https://cdn.discordapp.com/attachments/826469496323571773/831903708031221850/standard_1.gif')
        .setFooter(`©️ 2021 Recluse`)
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }

      return message.channel.send(emx);
    }
  }
};
