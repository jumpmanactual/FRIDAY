const config = require('./../config.json');
exports.run = (client, message, args, sql, Discord) => {
var embed = new Discord.RichEmbed()
    .setTitle("F.R.I.D.A.Y. Discord Bot")
    .setDescription("Patch me through to another server. [**Click Here**](https://discord.com/api/oauth2/authorize?client_id=786656494690369546&permissions=0&scope=bot) to add me to another server.")
    .setColor(0xFF6600)
    .setThumbnail(client.user.displayAvatarURL)
    message.channel.send({embed: embed});
    client.users.get(config.ownerID).send(`${message.author.username} has created an invite link`);
}