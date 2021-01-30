const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const yardım = new Discord.RichEmbed()
                .setColor('GOLD')
        .setAuthor('Friday Bot Kayıt Yardım Menüsü')
        .setFooter(`${msg.author.username} Başarıyla Kayıt Komutunu Kullandı!`, msg.author.avatarURL)
        .setThumbnail('https://cdn.discordapp.com/attachments/724274249774137355/757553069738295346/f-logo1-min.png')
        .setDescription('<a:saklan:752896867683270778> Botu Davet Etmek İçin `-davet` yazabilirisiniz.',false)
        .addField('**__Yetkili Menü__**', '`-kayıt-yetkili` Kayıt Yetkili yardım Menüsünü açar.',true)
        .addField('**__Kayıt Menü__**','`-kayıt`\n Kayıt Menüsünü açar.',true)
        .addField('**__EK KOMUT__**','`-KULLANIM` \n AÇIKLAMA.',true )
.setImage(`https://cdn.discordapp.com/attachments/724274249774137355/757554936090198076/f-min_2.png`);
msg.channel.send(yardım)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['yardım'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'yardım'
};