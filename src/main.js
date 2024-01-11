// load Env file
import dotEnv from 'dotenv';
dotEnv.config();

import express from 'express';


const server = express(); 

server.get('/user',(req,res) =>{
    res.send("server get user ok")
})

server.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})