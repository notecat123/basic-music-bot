module.exports = {
    name: 'leave',
    description: "Musterio Disabled...",
    async execute(message, args) {
        const voiceChannel =message.member.voice.channel;

        if (!voiceChannel) return message.channel.send("You forgot to be in a music channel");
        await voiceChannel.leave();
        await message.channel.send('Succesfully disconnected :upside_down:')
    }
}