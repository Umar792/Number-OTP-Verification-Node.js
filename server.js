const express = require("express");
const app = express();
const twilio = require("twilio");

// const client = require("twilio")(
//   "ACc5133a914b2ad56df1eead524819c7a7",
//   "c6cd8445c0574d325ff2f28ab708bdbc"
// );

async function sendSMS() {
  const accountSid = "ACc5133a914b2ad56df1eead524819c7a7";
  const authToken = "c6cd8445c0574d325ff2f28ab708bdbc";
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
