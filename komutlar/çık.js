const discord = require('discord.js'); //modüller

exports.run = async (client, message, args) => {
client.guilds.cache.filter(a => a.memberCount < 5).forEach(a => a.leave()) // 5 sayısını editleyebilirsiniz. 10 olursa 10 altı swden çıkar
}

//Buranın altı handler
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: ["çık"], //kısayollar
    permLevel: 4 //perm level mainde karşıliklar yazar
  };
 
  exports.help = {
    name: "çık", //komutu çalıştıracak olan kelime
    description: "çık",//açıklama (isteğe bağlı)
    usage: "çık"//kullanım (isteğe bağlı)
  };