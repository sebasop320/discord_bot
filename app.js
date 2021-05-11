const Discord = require("discord.js");
const client = new Discord.Client();
const Embed = require('discord.js-embed');//instalar el embed 
const embed = new Embed(); //constante del embed

console.log('code 1 redy!');
const prefix = "!";


client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;



  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  if (command === "?") {
    message.reply(`Soy JOJO y esoty progrmado por Sebastian Ocampo`);
  }

if (command == hola){
  message.reply('Hola como estas el dia 10 de mayo del 2021 no estare funcionado por motivos de seguridad ATT:JOJO')
}

 //comando help
if (command === "help") {
  message.reply(`the prefix is !
  !help = ayuda
  !ban = banea a un miembro
  !kick = echa a un miembro
  !sum = has una suma
  !release = nueva actualizacion
  !? = mas sobre el autor
  !ping = mira cuanto tiempo se demora tu señal para llegar al sevidor de JOJO
  !stocks = mira la Bolsa de Valores en tiempo real
  https://discord.gg/heKbfeqeCX`);
  
}
//fin comando help

//embed
if (command == "help"){
  const hola = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('JOJO SERVER DE AYUDA')
	.setURL('https://discord.gg/heKbfeqeCX')
	.setAuthor('Añade a Jojo a tu server de discord', 'https://sebasop320.github.io/commandos/JOJO.jpg', 'https://discord.com/oauth2/authorize?client_id=837346134523379743&scope=bot&permissions=8')
	.setDescription('JOJO THE DISCORD MODERATION BOT')
	.setThumbnail('https://sebasop320.github.io/commandos/JOJO.jpg')
	//.setImage('https://sebasop320.github.io/commandos/JOJO.jpg')
	.setTimestamp()
	.setFooter('', '');

  message.channel.send({embed: hola});
}
//fin comando embed 


  if (command === "release") {
    message.reply(`new update may 15 :smiley:`);
  }

  if (command == "stocks"){
    message.reply(`https://www.marketwatch.com/investing/stock/live`);
  }

  if (command == "stocks"){
    message.reply(`https://finance.yahoo.com/most-active?.tsrc=fin-srch`);
  }

  if (command == "test") {
    message.reply('the server is working 100%')
  }

   if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }

  else if (command === "warn") {
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No Puedes usar este comando")
    if (!dUser) return message.channel.send("No encuetro el Usuario")
    let dMessage = args.join(" ").slice(22);
    if (dMessage.length < 1) return message.reply('Cual es la razon??')

    dUser.send(`${dUser}, Tienes una advertecia por ${dMessage} en el servidor ${message.guild.name}`)

    message.channel.send(`${dUser} ha sido advertido por ${dMessage} :thumbsdown:`)}
});

client.login('ODM3MzQ2MTM0NTIzMzc5NzQz.YIrNWw.QsFrjnzMslxhj87ENvgc73b7gMk');

client.on('ready', () => {
  console.log('code 2 redy!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No Puedes usar este comando")
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send(":rolling_eyes:You didn't mention the user to kick!");
      message.react(':sad:');
    }
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('ODM3MzQ2MTM0NTIzMzc5NzQz.YIrNWw.QsFrjnzMslxhj87ENvgc73b7gMk');
client.on('ready', () => {
  console.log('code 3 redy!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('!ban')) {
    if (!message.member.hasPermission("admin")) return message.reply("No Puedes usar este comando")
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.channel.send(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.channel.send('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.channel.send("That user isn't in this guild!");
      }
    } else {
      message.channel.send("You didn't mention the user to ban!");
    }
  }
});

client.login('ODM3MzQ2MTM0NTIzMzc5NzQz.YIrNWw.QsFrjnzMslxhj87ENvgc73b7gMk');