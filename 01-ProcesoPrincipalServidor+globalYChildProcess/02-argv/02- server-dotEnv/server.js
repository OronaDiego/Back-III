import express from 'express';
import 'dotenv/config';
import { initMongoDB } from './database';

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT

initMongoDB().then(()=>console.log('Conectado a la Base de datos').cath(()=>console.log(error)));

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
    console.log(`mode: ${process.argv[2]}`);
    
})