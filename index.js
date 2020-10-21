const { Telegraf } = require('telegraf')

const bot = new Telegraf("1197790310:AAFct93MLfMprOyf2GGqLhN23UnOVUeZ38I")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()