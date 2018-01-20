const Discord = require('discord.js');
const bot = new Discord.Client();

const command = require ('discord.js-command');
const bot = new command.Client();

bot.registry.RegisterGroup('music', 'Music');
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login(process.env.BOT_TOKEN)