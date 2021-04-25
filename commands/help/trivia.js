const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Best programming language",
    options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "Best NPM package",
    options: ["int.engine", "ms", "ws", "discord.js"],
    correct: 3,
  },
  {
    title: "Who is founder of team retro? ",
    options: ["Aviyan Dhakal", "Diwas Atreya", "Arpan Regmi", "Aviskar Duladi"],
    correct: 2,
  },
{
    title: "When dis corona started to attack? ",
    options: ["2011", "2018", "2019", "2020"],
    correct: 3,
  },
{
    title: "Where does Mt.Everest lies? ",
    options: ["Africa", "Asia", "America", "Australia"],
    correct: 2,
  },
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "mini-games",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Reply to this message with the correct question number! You have 15 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`<:recluse4:827723138959278121> | You got it correct!`);
      } else {
        return message.channel.send(`<:recluse9:827723571630964787> | You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`<:recluse2:827723090125258812> | You did not answer!`);
    }
  },
};
