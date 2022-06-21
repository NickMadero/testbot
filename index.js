const Discord = require('discord.js')
const dotenv = require("dotenv")

dotenv.config()
const TOKEN = process.env.TOKEN

 const prefix = '!'

 const client = new Discord.Client({
    allowedMentions:{
        parse: [`users`, `roles`],
        repliedUser: true
    },
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS"
    ],

 })

 client.on("ready", ()=>{
    console.log("bot has been turned on")
 })


client.on('message',message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLocaleLowerCase()

    if ( command == 'test'){
        message.channel.send("bot is working")
    }
})

 client.login(TOKEN)
