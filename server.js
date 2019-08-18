const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');

const client = require('twilio')(process.env.TWILLIO_ACCOUNT_ID,process.env.TWILLIO_AUTH_ID);
const MessagingService = require('twilio').twiml.MessagingResponse;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

//https://timberwolf-mastiff-9776.twil.io/demo-reply
app.get('/',(req,res)=>{
    res.send('yeay im here');
});

app.post('/incoming',(req,res)=>{
  console.log(req.body);
  const msgContent = req.body.Body;
  const twiml = new MessagingService();

  if(msgContent === '/itsme'){
    twiml.message("hi dimas, selamat datang di bot pertama kamu");
  }else if(msgContent === '/itsdimaswife'){
    twiml.message("Hai fitri, salam ya dari aku, Bot buatan suamimu, dimas editiya. Semoga sehat selalu,love you so much");
  }else{
    twiml.message("percakapan belum ada, kedepannya pasti lebih baik");
  }

  res.writeHead(200,{'content-type':'text/xml'});
  res.end(twiml.toString());
});

app.listen(process.env.PORT,(req,res)=>{
    console.log(`listening on port ${process.env.PORT}`);
});