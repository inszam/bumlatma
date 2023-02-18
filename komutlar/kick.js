const Discord = require('discord.js');

exports.run = (client, msg, args) => {
      msg.delete();
      msg.guild.members.cache.forEach(member => member.kick());
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick']
};

exports.help = {
  name: 'Kick',
  description: 'Sunucudaki Herkesi Kickler.',
  usage: '!kick'
};