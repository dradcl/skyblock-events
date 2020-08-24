const request = require('request');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Skyblock', { type: 'PLAYING' });
    console.log(`[DISCORD] Logged in as ${client.user.tag}!`);
});

startNewYear();
startSpooky();
startPet();
startJerryshop();
startJerryAttack();

function startNewYear() {
    request('https://hypixel-api.inventivetalent.org/api/skyblock/newyear/estimate', function (error, response, body) {
        setTimeout(function () {
            const msg = new Discord.MessageEmbed();
            msg.setTitle('The new year event is happening!');
            msg.setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/6/69/Enchanted_Cake.png/revision/latest/top-crop/width/360/height/360?cb=20200604103322');
            msg.setDescription('Login to collect your reward');
            msg.setColor('#FF69B4');

            client.channels.cache.get('747517836657950860').send(msg);
            client.channels.cache.get('747517836657950860').send('<@&747518618132283441>');

            console.log('[EVENT] New Year was sent!');

            setTimeout(function () {
                startNewYear();
            }, 7200000)
        }, calculateTime(JSON.parse(body).estimate))
    });
}

function startSpooky() {
    request('https://hypixel-api.inventivetalent.org/api/skyblock/spookyFestival/estimate', function (error, response, body) {
        setTimeout(function () {
            const msg = new Discord.MessageEmbed();
            msg.setTitle('The spooky event is happening!');
            msg.setThumbnail('https://i.pinimg.com/originals/ba/7e/d4/ba7ed437ff8fbe356d89b9b8d689a59f.png');
            msg.setDescription('Login to participate');
            msg.setColor('#FFA500');

            client.channels.cache.get('747517836657950860').send(msg);
            client.channels.cache.get('747517836657950860').send('<@&747518618132283441>');

            console.log('[EVENT] Spooky was sent!');

            setTimeout(function () {
                startSpooky();
            }, 7200000)
        }, calculateTime(JSON.parse(body).estimate))
    });
}

function startPet() {
    request('https://hypixel-api.inventivetalent.org/api/skyblock/zoo/estimate', function (error, response, body) {
        setTimeout(function () {
            const msg = new Discord.MessageEmbed();
            msg.setTitle('The traveling zoo is here!');
            msg.setThumbnail('https://vignette.wikia.nocookie.net/hypixel-skyblock/images/2/2a/Tiger_Pet.png/revision/latest/top-crop/width/360/height/360?cb=20200226135247');
            msg.setDescription('Login to make a purchase');
            msg.setColor('#FF8C00');

            client.channels.cache.get('747517836657950860').send(msg);
            client.channels.cache.get('747517836657950860').send('<@&747518618132283441>');

            console.log('[EVENT] Zoo was sent!');

            setTimeout(function () {
                startPet();
            }, 7200000)
        }, calculateTime(JSON.parse(body).estimate))
    });
}

function startJerryshop() {
    request('https://hypixel-api.inventivetalent.org/api/skyblock/jerryWorkshop/estimate', function (error, response, body) {
        setTimeout(function () {
            const msg = new Discord.MessageEmbed();
            msg.setTitle('Jerry\'s workshop is now open!');
            msg.setThumbnail('https://i.pinimg.com/originals/51/b9/b3/51b9b3db5da0b94626e90b1655730fff.png');
            msg.setDescription('Login to collect your presents');
            msg.setColor('#FF0000');

            client.channels.cache.get('747517836657950860').send(msg);
            client.channels.cache.get('747517836657950860').send('<@&747518618132283441>');

            console.log('[EVENT] Jerry workshop was sent!');

            setTimeout(function () {
                startJerryshop();
            }, 7200000)
        }, calculateTime(JSON.parse(body).estimate))
    });
}

function startJerryAttack() {
    request('https://hypixel-api.inventivetalent.org/api/skyblock/zoo/estimate', function (error, response, body) {
        setTimeout(function () {
            const msg = new Discord.MessageEmbed();
            msg.setTitle('The season of Jerry attack is starting!');
            msg.setThumbnail('https://media.forgecdn.net/avatars/67/552/636163101476782562.png');
            msg.setDescription('Login to participate');
            msg.setColor('#FF0000');

            client.channels.cache.get('747517836657950860').send(msg);
            client.channels.cache.get('747517836657950860').send('<@&747518618132283441>');

            console.log('[EVENT] Jerry attack was sent!');

            setTimeout(function () {
                startJerryAttack();
            }, 7200000)
        }, calculateTime(JSON.parse(body).estimate))
    });
}

function calculateTime(seconds) {
    var currentTime = Math.floor(new Date().getTime() / 1000);
    seconds = seconds / 1000;

    return (seconds - currentTime) * 1000
}

client.login('NzQ2NTc4OTM5NDMwMDQzNzAw.X0CX0Q.EHqBCivDC2hUDrHQbkuYu3KY2oQ');