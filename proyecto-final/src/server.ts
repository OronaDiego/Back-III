import express from 'express';


const app= express();
const PORT= 8000;

app.get('/', (_req,res)=>{
    res.send('Hello word')
})

app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));