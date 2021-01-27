const { static } = require('express');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT,()=>{
    console.log(`Listening On Port ${PORT}`)
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

// socket

const io = require('socket.io')(server);

io.on('connection',(socket)=>{
    console.log('connected');

    socket.on('message',(msg)=>{
      

        socket.broadcast.emit('message',msg)
    })

  

})


