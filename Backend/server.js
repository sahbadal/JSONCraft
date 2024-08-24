import express from 'express';

const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.json({message:"Hello from server !"})
})

app.listen(port,()=>{
    console.log(`server running on: http://localhost:${port}`);
    
})