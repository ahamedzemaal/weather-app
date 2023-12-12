const express = require("express");
const twilio = require("twilio");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

async function smsAPI() {
  const client = new twilio(
    process.env.TWILIO_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  return client.messages
    .create({
      body: "Hi" ,
      from: "+12052361069",
      to: process.env.PHONE_NUMBER,
    })
    .then((message) => console.log(message, "Message Send"))
    .catch((error) => console.log("Error: ", error));
}

smsAPI();
app.listen(5000, () => console.log("Listening at port 5000"));
