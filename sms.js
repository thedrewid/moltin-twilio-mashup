// Send an SMS via twilio
require('dotenv').load();

const accountSid = process.env.TAPI;
const authToken = process.env.TAUTH;
// require the Twilio module and create a REST client

const client = require('twilio')(accountSid, authToken);

module.exports.createSMS = (body) => {
  client.messages.create({
      to: process.env.PHONE_NUMBER,
      from: process.env.TWILIO_PHONE_NUMBER,
      body: body
    })
    .then((message) => console.log(message.sid));
}

