const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("you can not use the command 'kick'.");
    const mentionedmember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "no reason given";
    const kickembed = new discord.MessageEmbed()
     .setTitle('you were kicked from pilot seagul hangout')
     .setDescription(`reason: ${reason}`)
      .setColor("#a61616")
      .setTimestamp()
     .setFooter(client.user.tag, client.user.displayAvatarURL());
    
    // !kick @user reason
    if (!args[0]) return message.channel.send("you need to state a user to kick. '!kick @user reason'");
    if (!mentionedmember) return message.channel.send("the member mentioned is not in the server. please check your spelling on the username.");
    try {
      await mentionedmember.send(kickembed);
    }  catch (err) {
      console.log('I was unable to message the member @user tryed to kick.');
    }

    try {
       await mentionedmember.kick(reason);
    } catch (err) {
       console.log(err);
       return message.channel.send("I was unable to kick the user mentioned.");
    }
    
  
  
  
  
  }
}