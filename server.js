const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

//https://timberwolf-mastiff-9776.twil.io/demo-reply
app.get('/',(req,res)=>{
    //res.send('yeay im here');
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(process.env.PORT,(req,res)=>{
    console.log(`listening on port ${process.env.PORT}`);
});