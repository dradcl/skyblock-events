const request = require('request');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`[DISCORD] Logged in as ${client.user.tag}!`);
});

startCountdown();

function startCountdown() {
    request('https://hypixel-api.inventivetalent.org/api/skyblock/newyear/estimate', function (error, response, body) {
        setTimeout(function () {
            const msg = new Discord.MessageEmbed();
            msg.setTitle('The new year event is happening!');
            msg.setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/6/69/Enchanted_Cake.png/revision/latest/top-crop/width/360/height/360?cb=20200604103322');
            msg.setDescription('Login to collect your reward');
            msg.setColor('#FF69B4');

            client.channels.cache.get('713807457385971722').send(msg);
            client.channels.cache.get('713807457385971722').send('<@299633935925903360>');

            console.log('[EVENT] New Year was sent!');

            startCountdown();
        }, calculateTime(JSON.parse(body).estimate))
    });
}

function calculateTime(seconds) {
    var currentTime = Math.floor(new Date().getTime() / 1000);
    seconds = seconds / 1000;

    return (seconds - currentTime) * 1000
}

client.login('NzQ2NTc4OTM5NDMwMDQzNzAw.X0CX0Q.EHqBCivDC2hUDrHQbkuYu3KY2oQ');