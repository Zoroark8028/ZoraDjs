const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 if(!['803363145921462272', '601473350619103235', '674656385656422411'].includes(message.author.id)) return;
 
 let conteudo = args.join(" ");
 
 if(!conteudo) {
 return message.channel.send('**Coloque o código!**')
 }
 
 let code = args.join(' ')
try {
let ev = eval(code)
message.channel.send('**Resultado** `\n'+ev+'`')
} catch(err) {
message.channel.send('**Errou baby** `\n'+err+'`')
}
   }
