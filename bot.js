const TwitchBot = require('twitch-bot')
const insertLine = require('insert-line')
var request = require('request')
const Bot = new TwitchBot({
  username: 'XASRL',
  oauth: 'oauth:************************',
  channels: ['XelaSRL']
})

Bot.on('connected', (address, port, channel) => {
  console.log(`Bot started.\n===================================================`)
})

Bot.on('message', (chatter, username) => {
  console.log(chatter.username + ": " + chatter.message)

  const fs = require('fs')

  insertLine('chatlog.txt').append(chatter.username + ": " + chatter.message).then(function(err) {
  })
})

Bot.on('error', err => {
  console.log(err)
})

function doSomething() {
  Bot.say('xelaZ')
}

setInterval(doSomething, 900000);

Bot.on('message', chatter => {
  if (chatter.message.toLowerCase() === ">ping") {
    Bot.say('Bot is online.')
  }
})

Bot.on('message', chatter => {
  if (chatter.message.toLowerCase() === ">fpg") {
    Bot.say('By clipping into the block at the bottom of the flagpole, I skip the flag animation, this saves about 0.35 seconds.')
  }
})

Bot.on('message', (chatter, username) => {
  if (chatter.message.toLowerCase() === ">twitter") {
    Bot.say('@' + chatter.username + ' You can find my twitter at https://twitter.com/KaiTheWeirdo')
  }
})

Bot.on('message', (chatter, username) => {
  if (chatter.message.toLowerCase() === ">youtube") {
    Bot.say('@' + chatter.username + ' You can find my youtube at	https://www.youtube.com/channel/UCxCeA_wbmDwEACTn_vcGxqg')
  }
})

Bot.on('message', (chatter, username) => {
  if (chatter.message.toLowerCase() === '>src') {
    Bot.say('You can find my src page at https://www.speedrun.com/user/XelaSRL')
  }
})

Bot.on('message', chatter => {
  if (chatter.message.toLowerCase() === '>controller') {
    Bot.say('Depending on the platform, I use different controllers. NES - dogbone | SNES - normal super famicom controller | PC - keyboard or PS4 controller | Switch - normal joycons')
  }
})

Bot.on('message', (chatter, username) => {
  if (chatter.message.toLowerCase().startsWith('>love')) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var user = chatter.message.split(' @')[1]
    Bot.say('There is a ' + getRandomInt(101) + "% chance of love between @" + chatter.username + " and @" + user)
  }
})

Bot.on('message', (chatter, username) => {

  if (chatter.username === 'xelasrl', 'tavenwebb2002', 'thelxinoe16') {

      if (chatter.message.toLowerCase().startsWith(">timeout")) {
        var user = chatter.message.split(' ')[1]
        var time = chatter.message.split(' ')[2]
        Bot.say('/timeout ' + user + ' ' + time)
      }

      if (chatter.message.toLowerCase().startsWith(">purge")) {
        var user = chatter.message.split(' ')[1]
        Bot.say('/timeout ' + user + ' 1')
      }

      if (chatter.message.toLowerCase().startsWith(">ban")) {
        var user = chatter.message.split(' ')[1]
        Bot.say('/ban ' + user)
      }

  }
})

Bot.on('message', chatter => {
  if (chatter.message.toLowerCase().startsWith('>slots')) {
    var kappas = ['Kappa', 'KappaPride', 'KappaRoss', 'KappaClaus', 'KappaWealth']
    var slot1 = kappas[Math.floor(Math.random() * kappas.length)]
    var slot2 = kappas[Math.floor(Math.random() * kappas.length)]
    var slot3 = kappas[Math.floor(Math.random() * kappas.length)]
    if (slot1 == slot2 && slot2 == slot3) {
      Bot.say(slot1 + ' ' + slot2 + ' ' + slot3 + ' You win!')
    } else if (slot1 !== slot2 && slot2 !== slot3 && slot1 !== slot3) {
      Bot.say(slot1 + ' ' + slot2 + ' ' + slot3 + ' You lose!')
    } else {
      Bot.say(slot1 + ' ' + slot2 + ' ' + slot3 + ' Getting there.')
    }
  }
})

Bot.on('message', (chatter, username) => {
  if (chatter.message.toLowerCase().startsWith(">rps")) {
    var rps = ['rock', 'paper', 'scissors']
    var choice = chatter.message.split(' ')[1]
    var botchoice = rps[Math.floor(Math.random() * rps.length)]
    if (choice == botchoice) {
      Bot.say('@' + chatter.username + " I choose " + botchoice + "! It's a draw!")
    }
      if (choice == 'rock') {
        if (botchoice == 'paper') {
          Bot.say('@' + chatter.username +  ' ' + "I choose paper! You lose!")
        } else if (botchoice == 'scissors') {
          Bot.say('@' + chatter.username +  ' ' + "I choose scissors! You win!")
        }
      }

      if (choice == 'paper') {
        if (botchoice == 'rock') {
          Bot.say('@' + chatter.username +  ' ' + "I choose rock! You win!")
        } else if (botchoice == 'scissors') {
          Bot.say('@' + chatter.username +  ' ' + "I choose scissors! You lose!")
        }
      }

      if (choice == 'scissors') {
        if (botchoice == 'rock') {
          Bot.say('@' + chatter.username +  ' ' + "I choose rock! You lose!")
        } else if (botchoice == 'paper') {
          Bot.say('@' + chatter.username +  ' ' + "I choose paper! You win!")
        }
      }
    }
})

Bot.on('message', (chatter,username) => {
  if (chatter.message.toLowerCase().startsWith(">pb")) {
    var game = chatter.message.split(' ')[1]
    var category = chatter.message.split(' ')[2]
    if (game == 'smb') {
      if (category == 'any%') {
        Bot.say('My PB in Super Mario Bros. any% is 4:58.042 and is in 37th place.')
      } else if (category == 'warpless') {
        Bot.say('My PB in Super Mario Bros. warpless is 20:30 and is in 80th place.')
      } else {
        Bot.say('My PB in Super Mario Bros. minus world ending is 2:35.534 and is in 14th place.')
      }
    }

    if (game == 'smassmb') {
      if (category == 'any%') {
        Bot.say('My PB in Super Mario All Stars: Super Mario Bros. any% is 5:28 and is in 59th place.')
      }
    }

    if (game == 'smbce') {
      if (category == '1warp') {
        Bot.say('My PB in Super Mario Bros. one warp is 11:19 and is in 17th place.')
      } else if (category == 'glitchless') {
        Bot.say('My PB in Super Mario Bros. one warp is 5:06.279 and is in 7th place.')
      } else {
        Bot.say('My PB in Super Mario Bros. 8-4 IL is 44.776 and is in 19th place.')
      }
    }

    if (game == 'smbtll') {
      if (category == 'any%') {
        Bot.say('My PB in Super Mario Bros.: The Lost Levels PB is 8:57 (without loads) and is in 47th place.')
      }
    }

    if (game == 'tetris') {
      Bot.say('My PB in Tetris is 7:04 and is in 131st place.')
    }

    if (game == 'smb3') {
      if (category == 'any%') {
        Bot.say('My PB in Super Mario Bros. 3 any% is 3:30 and is in 23rd place.')
      }
    }

    if (game == 'smw') {
      if (category == '11exit') {
        Bot.say('My PB in Super Mario World 11 exit is 15:08 and is in 757th place.')
      }
    }

    if (game == 'dragster') {
      Bot.say('My PB in Dragster is 5.71 and is in 76th place')
    }

    if (game == 'mkds') {
      if (category == 'mushroomcup') {
        Bot.say('My PB in Mario Kart DS mushroom cup is 8:31 and is in 88th place')
      }
    }
  }
})
