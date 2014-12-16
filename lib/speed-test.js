var speedTest = require('speedtest-net')

function runTest(callback){
  console.log('running test')
  speedTest()
    .on('done', function(data){
      // this package is supposed to return download speed in B/s
      // this is a lie, just like the cake.
      // I found the magic number that converts the number they do return to what speedtest.net is saying
      // #DealWithIt

      var speed = data.downloadSpeed / 124755
      speed = speed.toFixed(2)
      console.log('speed', speed, 'Mb/s')
      console.log('url', data.resultUrl)
      callback(null, { speed: speed, url: data.resultUrl })
    })
    .on('error', callback)
}

module.exports = runTest
