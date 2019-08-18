//express here
const express = require('express');
const app = express();

//path joining
const path = require('path');
const dfkeyPath = path.join(__dirname,'dfkey.json');

//dotenv config
const dotenv = require('dotenv');
dotenv.config();

//body parser
const bodyParser = require('body-parser');

/*dialogflow
const { SessionClient } = require('dialogflow');
const dialogflowClient = new SessionClient({
    keyFileName:dfkeyPath
});
*/

//twilio
const client = require('twilio')(process.env.TWILLIO_ACCOUNT_ID,process.env.TWILLIO_AUTH_ID);
const MessagingService = require('twilio').twiml.MessagingResponse;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

/**
 * start routing here
 * yeeyyeye
 */
app.get('/',(req,res)=>{
    res.send('yeay im v1.0');
});

app.post('/webhook',(req,res)=>{
    const data = req.body;
    const twiml = new MessagingService();
    twiml.message('yeay!! this is from hook');
    res.writeHead(200,{'content-type':'text/xml'});
    res.end(twiml.toString());
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