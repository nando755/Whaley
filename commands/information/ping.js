const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    category: 'information',
    description: 'Returns bot and API latency in milliseconds.',
    usage: `${(process.env.PREFIX)}ping`,
    run: async (client, message, args) => {
        const msg = await message.channel.send('🏓 Pinging...');

        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle('🏓 Pong!')
        .setDescription(`Bot Latency is **${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms** \nAPI Latency is **${Math.round(client.ws.ping)} ms**`);

        message.channel.send(embed);
    }
}