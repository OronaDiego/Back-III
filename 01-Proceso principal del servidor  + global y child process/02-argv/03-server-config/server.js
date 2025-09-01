import express from 'express';
import { initMongoDB } from './database';
import config from './config';

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}));

const PORT = config.PORT

initMongoDB().then(()=>console.log('Conectado a la Base de datos').cath(()=>console.log(error)));

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
    console.log(`mode: ${process.argv[2]}`);
    
})