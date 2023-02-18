const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.channel.send('**Pingim : ' + client.ws.ping + 'Ms!**')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ping']
};

exports.help = {
  name: 'Ping',
  description: 'Botun Pingini Atar.',
  usage: 'ping'
};