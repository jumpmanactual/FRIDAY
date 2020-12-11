module.exports.leaderboardEmbed = function(client, message, sql, Discord) {
    sql.all(`SELECT username, globalPoints, nextPL from userScores WHERE guildID='${message.guild.id}' ORDER BY globalPoints DESC LIMIT 5`).then(gLeader =>{
        if(!gLeader[0]){
            var leadOut = "Sorry there is no leaderboards yet. Start chatting!";
        }else{
            var lUser = gLeader.map(z=>z.username);
            var lPoints = gLeader.map(y=>y.globalPoints);
            var lNextP = gLeader.map(x=>x.nextPL);

            var leadOutp = lUser.map(function(a,b){
                let s = b + 1;
                return[s + '. ' + a + ' ' + lPoints[b] + '/' + lNextP[b]];
            })
            var leadOut = leadOutp.join("\n");
        }

        var embed = new Discord.RichEmbed()
            .setColor(0xff6600)
            .setThumbnail(message.guild.iconURL)
            .addField(`Leaderboard for **${message.guild.name}**`, `${leadOut}`, true)
        message.channel.send({embed: embed});
    });

}