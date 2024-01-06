import mongoose from 'mongoose';
import 'dotenv/config';

const dbName = 'chat-application';
const dbUrl = process.env.DATABASE_URL;

mongoose.connect(`${dbUrl}/${dbName}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log(`Connected to MongoDB database: ${dbName}`);
});

export default db;
