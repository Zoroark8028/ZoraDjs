const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bal",
aliases: "atm",
    description: "bleh",

    async run (client, message, args) {

let user = message.member;

        let bal = await db.fetch(`mo_${user.id}`);
        if(bal === null) bal = 0;


       message.channel.send(`${user}, você tem **${bal} ZoraMoedas**`)  
    
    }
}