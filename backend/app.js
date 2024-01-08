import express from 'express';
import './config/db.js';
import { Server as socketIo } from 'socket.io';
import http from 'node:http';
import router from './routers/index.js';
import 'dotenv/config';

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

app.use(express.json());
app.use(router);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});