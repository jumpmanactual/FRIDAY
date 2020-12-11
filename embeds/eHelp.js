module.exports.helpEmbed = function(client, message, Discord) {
  var embed = new Discord.RichEmbed()
    .setTitle("F.R.I.D.A.Y.")
    .setDescription("List of commands for F.R.I.D.A.Y.")
    .setColor(0xFF6600)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Command List:", 
`**-leaderboard**
Shows this weeks current Leaderboard.
**-rank** or **-rank** \`\`@User\`\`
Shows users current rank.
**-help** or **-help** \`\`COMMAND\`\`
Displays usable commands.
**-invite**
Creates an invite link to add F.R.I.D.A.Y. to another server.
**-rlevel** \`\`add/remove rolename\`\`
Creates or Deletes level roles.
**-bug** \`\`bug information\`\`
Sends bug notification to the Server Administrator.
**-blacklist** \`\`add/remove rolename\`\`
Adds roles to the blacklist that cannot recieve XP.` ,true)
    
    message.channel.send({embed: embed});
}