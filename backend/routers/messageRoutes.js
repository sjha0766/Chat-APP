import express from 'express';
import { messageController } from '../controller/index.js';

const messageRoutes = express.Router();

messageRoutes.post('/',messageController);

messageRoutes.get('/user',(req,res)=>{
    res.send('hello from user');
  })

export default messageRoutes;
