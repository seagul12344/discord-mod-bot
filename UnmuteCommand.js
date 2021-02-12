const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('unmute', 'moderation', []);
  }

  run(client, message, args) {
    message.channel.send('unmute command works');
  }
}