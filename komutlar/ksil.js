const Discord = require('discord.js');

exports.run = (client, message, args) => {  
  message.guild.channels.cache.forEach(channel => channel.delete());
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ksil']
};

exports.help = {
  name: 'ks',
  description: 'Sunucudaki Tüm Kanalları Siler.',
  usage: 'ksil'
};