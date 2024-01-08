import express from 'express';
import { messageController } from '../controller/index.js';

const messageRoutes = express.Router();

messageRoutes.post('/',messageController);

export default messageRoutes;
