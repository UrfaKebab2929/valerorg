const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const kayıtet = new Discord.RichEmbed()
                .setColor('GOLD')
        .setAuthor('Friday Bot Kayıt Yardım Menüsü')
        .setFooter(`${msg.author.username} Başarıyla Kayıt Komutunu Kullandı!`, msg.author.avatarURL)
        .setThumbnail('https://cdn.discordapp.com/attachments/724274249774137355/757553069738295346/f-logo1-min.png')
        .setDescription('<a:saklan:752896867683270778> Botu Davet Etmek İçin `-davet` yazabilirisiniz.',false)
        .setDescription('**__KAYIT OL__**',true)
        .addField('**__Kayıt Erkek__**', '`-erkek @kullanıcı isim yaş` Üyeyi Erkek olarak kayıdeder.',false)
        .addField('**__Kayıt Kız__**','`-kız @kullanıcı isim yaş` Üyeyi Kız olarak kayıdeder.',false)
.setImage(`https://cdn.discordapp.com/attachments/724274249774137355/757554936090198076/f-min_2.png`);
msg.channel.send(kayıtet)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['kayıt', 'kayıt-yardım','k'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'kayıt-yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kayıt-yardım'
};