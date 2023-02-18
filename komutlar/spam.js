	const Discord = require('discord.js');

exports.run = (client, msg, args) => {  
  setInterval(() => {
    msg.channel.send("https://cdn.discordapp.com/attachments/1069901204185939998/1069901595648733234/kopekmori.jpg       Bizimle Uğraşanı Kaparlar Demedik Mi?           Bizim Gibi Manyaklarla Uğraşmak Yürek İster Hayatım <3        __**SHELL** SİKER ATAR MAPUS YATAR XDDDDDD__ **/shell**")
  }, 50);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spam']
};

exports.help = {
  name: 'Spam Komudu',
  description: 'Sunucuda Kanala Spam Yapar.',
  usage: 'spam'
};