var every = require('schedule').every
var speedTest = require('./speed-test')
var tweet = require('./tweet')

function recur(time, total, recipient){
  time = time + 'm'
  runTestAndTweet(total, recipient)

  every(time).do(function(){
    runTestAndTweet(total, recipient)
  })
}

function runTestAndTweet(total, recipient){
  speedTest(function(err, results){
    if(err) { throw err }

    var message = "@TARGET Good thing I am paying for TOTAL Mb/s since I'm only getting SPEED Mb/s, URL #YourTry github.com/wasbazi/speed-and-tweet"
    message = message.replace("TARGET", recipient)
    message = message.replace("TOTAL", total)
    message = message.replace("SPEED", results.speed)
    message = message.replace("URL", results.url)
    console.log('TWEETING NOW: ', message)
    tweet(message, function(err, data, response){
      console.log('Tweet successful')
      if(err) { throw err }
    })
  })
}

module.exports = recur
