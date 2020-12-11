module.exports.profileEmbed = function(client, message, user, iUser, Discord) {
    var embed = new Discord.RichEmbed()
        .setTitle(user.username)
        .setDescription(`**Level:** ${iUser.uLevel} \n**Exp:** ${iUser.globalPoints} / ${iUser.nextPL}\n**Rank:** ${iUser.globalRank}`)
        .setColor(0xff6600)
        .setThumbnail(user.displayAvatarURL);

    message.channel.send({embed: embed});

}