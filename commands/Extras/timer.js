const ms = require("ms");
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "timer",
  usage: `timer <time> <second / minute / hour / day>` ,
  category: "utility",
  aliases: ["stopwatch", "sw"],
  description: "sets stopwatch",
  
  args: true,
  permission: "",
  cooldown: 1,

  run: async (client, message, args) => {
    const input = args[0];
    const input2 = args[1];
    const reply =
      1500 ||
      input2
        .replace(`s` || `second`|| `detik`, 1500)
        .replace(`m` || `minute`|| `menit`, 50000)
        .replace(`h` || `hour`|| `jam`, 3500000)
        .replace(`d` || `day`|| `hari`, 86300000);
    const Ss = reply;
    var remainingTime = input,
      remainingCount = 1,
      status = ":stopwatch:";
    var countdown = await message.channel.send(
      new Discord.MessageEmbed()
        .addField(
          "Timer",
          `Started! **${remainingTime}${input2 || "s"}** ${status}`
        )
        .setColor("RANDOM")
    );
    let clock = setInterval(() => {
      remainingTime--;
      countdown.edit(
        new Discord.MessageEmbed()
          .addField(
            "Start-Time",
            `**${remainingTime}${input2 || "s"}** remain ${status}`
          )
          .setColor("RANDOM")
      );
      if (remainingTime == 0) {
        status = ":stopwatch:";
        clearInterval(clock);
        countdown.delete();
        message.channel.send(
          new Discord.MessageEmbed()
            .addField(
              "Timer Finished",
              `Done **${input}${input2 || "s"}** ${status}`
            )
            .setColor("RANDOM")
        );
      }
    }, Ss);
  }
};
