const Discord = require('discord.js');

exports.run = (client, msg, args) => {  
      msg.delete();
  msg.guild.roles.cache.forEach(roles => roles.delete());
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rsil']
};

exports.help = {
  name: 'rs',
  description: 'Sunucudaki Tüm Rolleri Siler.',
  usage: '!rsil'
};