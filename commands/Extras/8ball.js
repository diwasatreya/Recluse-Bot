const { MessageEmbed } = require('discord.js');
const reactions = [':sweat_smile:', ':slight_smile:', ':thinking:', ':8ball:']; //Change bot's reactions
const answers = ['Yes', 'Of Course', 'Maybe', 'No', 'Impossible', 'Why not?'];//Change bot's answers 

module.exports = {
  name: '8ball',
  usage: `8ball Do you like me` ,
  category: "mini-games",
  aliases: ["answer", "ans"],
  description: 'Ask the bot a Yes/No question and wait for the answer',
  async run(client, message, args){ 
    const question = args.join(' ');
    if (!question) return message.channel.send('**:yawning_face: - You Didn\'t Ask Me Anything .**|<:recluse7:827723090125258812> ');
    const botans = new MessageEmbed()
      .setThumbnail('https://discord.com/assets/0cfd4882c0646d504900c90166d80cf8.svg')
      .setColor('RANDOM')
      .setTitle(`${client.user.username}'s 8Ball Game:`)
      .setDescription(`${message.author} Asked Me: \n\`${question}?\` \nAnd My Answer Is: \n**${reactions[Math.floor(Math.random() * reactions.length)]} - ${answers[Math.floor(Math.random() * answers.length)]} !**`)
      .setFooter('This Game Is Made For Fun Only <:recluse5:827723187981778945> .');
      message.channel.send(botans).then(() => message.delete());
  }
}
