
exports.run = (client, message, args, sql, Discord) => {
  sql.all(`SELECT roleName, level FROM levelRoles WHERE guildID = '${message.guild.id}' ORDER BY level ASC`).then(rRow =>{
    if(!rRow[0]){
      var rlOut = "None";
    }else{
      var rlName = rRow.map(z=>z.roleName);
      var rlLevel = rRow.map(x=>x.level);
      var rlOutp = rlLevel.map(function(a,b){
        return['Level ' + `${a}` + '  Role: ' + `**${rlName[b]}**`];
      })
      var rlOut = rlOutp.join("\n");
    }
    var embed = new Discord.RichEmbed()
      .setTitle("Server Roles")
      .setDescription(`Roles for ${message.guild.name} server`)
      .setColor(0x00AE86)
      .setThumbnail(message.guild.iconURL)
      .addField("Roles", `${rlOut}`, false)
    message.channel.send({embed: embed});
  });
}
