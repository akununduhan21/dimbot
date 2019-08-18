const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const keyPath = process.env.DF_KEY_PATH;


dotenv.config();

if(!keyPath){
    console.log('You need to specify a path to a service account keypair in environment variable DF_SERVICE_ACCOUNT_PATH. See README.md for details.');
    process.exit(1);
}

//https://timberwolf-mastiff-9776.twil.io/demo-reply
app.get('/',(req,res)=>{
    //res.send('yeay im here');
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/incoming',(req,res)=>{

});

app.listen(process.env.PORT,(req,res)=>{
    console.log(`listening on port ${process.env.PORT}`);
});