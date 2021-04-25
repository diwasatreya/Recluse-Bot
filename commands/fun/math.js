const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;

module.exports = {
  name: "math",
  category: "misc",
  run: async (client, message, args) => {
    try {
      if (!args[0]) return message.channel.send("<:recluse6:827723300457152512> Please Give Me Equation!");

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Result`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(` <:recluse3:827723090125258812>  Please Give Me Valid Equation | Try Again Later! `).then(() => console.log(error));
    }
  }
};
