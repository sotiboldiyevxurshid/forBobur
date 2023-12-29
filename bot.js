const { Telegraf } = require('telegraf'); // importing telegraf.js
require("dotenv").config();
var bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => ctx.reply(
    `Assalomu alaykum ${ctx.from.username?`@`+ctx.from.username:ctx.from.first_name}`,{
    reply_markup:{
        keyboard:[[{text:"rus"},{text:"eng"},{text:"uz"}],[{text:"raqam_yuborish", request_contact:true}]],
        resize_keyboard:true
    }}
))
bot.hears("rus",ctx=>{
    ctx.reply(`вы выбрали русский язык.`)
})
bot.hears("eng",ctx=>{
    ctx.reply(`you have chosen the English language.`)
})
bot.hears("uz",ctx=>{
    ctx.reply(`Siz O'zbek tilini tanladingiz .`)
})
bot.on('contact', (ctx) => {
    const phoneNumber = ctx.message.contact.phone_number;
    ctx.reply(`Telefon raqamingiz qabul qilindi: ${phoneNumber}`);
    console.log(phoneNumber)
  });

bot.launch();