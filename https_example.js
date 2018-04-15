var https = require('https');

console.log('i did it!');
var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// Response Handler:
var callback = function(response) {
  console.log('In response handler callback function');
  response.on('data', function(chunk){
    console.log('[---- Chunk of length', chunk.length,' ------]');
    console.log(chunk.toString());
  })  

}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");