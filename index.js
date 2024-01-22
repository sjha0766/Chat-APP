import express from 'express';
import http from 'node:http';
import { Server as socketIo } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);


const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);


app.use(express.json());
app.use(express.static(__dirname+'/public/'));

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);
  });
});

app.get('/',(req,res)=>{
  res.sendFile(__dirname+ '/index.html');
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});