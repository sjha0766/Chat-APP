import express from 'express';
import './config/db.js';
import { Server as socketIo } from 'socket.io';
import http from 'node:http';
import 'dotenv/config';

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

app.use(express.json());

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});