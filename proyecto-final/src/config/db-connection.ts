import config from './config.js';
import { connect } from 'mongoose';

export const initMongoDB = async()=>{
    await connect(config.MONGO_URL as string)
}