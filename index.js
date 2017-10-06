const sms = require('./sms.js');
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
port = process.env.EXPRESS_PORT;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Get the webhook
app.post('/', (req, res) => {
  // Tell webhook we have recieved the POST
  res.send('200');
  // Log the request
  console.log(req.body);

  var body = JSON.stringify(req.body);
  // Send to phone number via the Twilio API
  sms.createSMS(body);
})

// Listen
app.listen(port);
console.log("Listening on: " + port);