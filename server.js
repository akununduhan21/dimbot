const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook',(req,res)=>{
    const data = req.body;

    const response = {
        fulfillmentText: "your webhook work fine"
    }

    res.json(response);
});

app.listen(process.env.PORT || 5000);