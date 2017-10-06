const sms = require('./sms.js');
const express = require('express');

const app = express()
port = process.env.EXPRESS_PORT

//Get the webhoo
app.post('/', (req, res) => {
  // Tell moltin we have recieved the POST
  res.send('200');
  // Log the request
  console.log(req);

  // Extract relevant data

  // Send to phone number via the Twilio API
  sms.createSMS("This is where an order would go")
})

// Listen
app.listen(port);
console.log("Listening on: " + port)