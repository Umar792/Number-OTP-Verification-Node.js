const express = require("express");
const app = express();
const twilio = require("twilio");



async function sendSMS() {
  const accountSid = "put your sid";
  const authToken = "put your auth token";
  const client = twilio(accountSid, authToken);
  const OTP = Math.floor(Math.random() * 9000 + 1000);
  client.messages
    .create({
      body: `Your OTP is ${OTP}`,
      from: "+14302336782",
      to: "+923107813140",
    })
    .then((message) => console.log("OTP send Successfuly"))
    .catch((err) => console.log(err));
}

sendSMS();

app.get("/", (req, res) => {
  res.send(`
  <h1> OTP verification bMobile Number </h1>
  `);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
