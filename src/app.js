import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './server/server.js';

dotenv.config();

const url = process.env.DB;

const PORT = process.env.PORT || 3001;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('start DB ok');
  app.listen(PORT, () => console.log('server ok'));
}).catch((err) => console.error((err)));
