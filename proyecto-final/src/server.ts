import express from 'express';
import { initMongoDB } from './config/db-connection.js';
import { logger } from './utils/logs/logger.js';


const app= express();
const PORT= 3000;

initMongoDB()
    .then(()=>logger.info('MongoDb connected successfully'))
    .catch((error) => logger.error('MongoDB connection error', error));

app.get('/', (_req,res)=>{
    res.send('Hello word')
})

app.listen(PORT, ()=> logger.info(`Server is running on http://localhost:${PORT}`));