module.exports = {
  name: "bug",
category: "info",
run : async(client, message, args) => { 
// again make this fit your command handler style 😀
  if (!args[0]) return message.reply("<:recluse6:827723090125258812> Please specify the bug. Example:\n`/punch isn't working. It isn't mentioning the user I'm trying to punch`");   
  if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`/punch isn't working. It isn't mentioning the user I'm trying to punch`");   
  args = args.join(" ");   
  message.reply("<:recluse5:827723187981778945> Thanks for submitting a bug!");  
  const content = `\`\`\`**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**\`\`\``;   
  client.channels.cache.get('826476918232711228').send(content)
}
}
