module.exports = {
    name: 'hello',
    description: "A little welcome?",
    execute(message, args){
        message.channel.send('Aye! How are you doing? You know I love you. Your beautiful!!!');
    }
}