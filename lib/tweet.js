var Twit = require('twit')

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_TOKEN_SECRET
})

function tweet(message, callback){
  T.post('statuses/update', { status: message }, function(err, data, response){
    callback(err, data, response)
  })
}

module.exports = tweet
