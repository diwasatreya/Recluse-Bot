const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "remind",                 aliases: ["rn", "rem"],
  category: "utility",
  description: "Remind You ;)!",
  usage: "Remind <Time> | <Reason>",
  run: async (client, message, args) => {
    const Array = ["d", "h", "m", "s"];

    if (
      !args[0] ||
      args[0].length < 2 ||
      !Array.find((e) => args[0].endsWith(e))
    )
      return message.channel.send(`Please Give Valid Time - 1d , 1h , 1m , 1s`);

    const Last = args[0].slice(0, -1);

    if (Last < 1 || isNaN(Last))
      return message.channel.send(`Please Give Valid Time - 1d , 1h , 1m , 1s`);

    const Reason = args.slice(1).join(" ") || "None";

    message.channel.send(
      `Ok I Will Remind You After ${args[0]}!`
    );

    setTimeout(async () => {
      message
        .reply(
          `**Your reminder ** ${Reason !== "None" ? `\n\n**Reason:** ${Reason}` : ""}`
        )
        .catch((err) =>
          message.channel.send(
            `I Can't Dm ${message.author.username} For Reminder!`
          )
        );
    }, ms(args[0]));
  },
};
