var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//app.get('/', function(req, res){
//  res.sendFile(__dirname + '/index.html');
//});

var counter = 1;
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    msg.id = counter++;
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(8090, function(){
  console.log('listening on *:8090');
});
