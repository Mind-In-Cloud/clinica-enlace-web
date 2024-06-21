
// const mailgun = require("mailgun.js");
// const DOMAIN = "sandboxf3dc50b9e99d4bef823fe3a888e49e3a.mailgun.org";
// const mg = mailgun({apiKey: "<PRIVATE_API_KEY>", domain: DOMAIN});
// const data = {
// 	from: "Mailgun Sandbox <postmaster@sandboxf3dc50b9e99d4bef823fe3a888e49e3a.mailgun.org>",
// 	to: "kevin.a.muniz@gmail.com",
// 	subject: "Hello",
// 	text: "Testing some Mailgun awesomness!"
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });


// documentation help : https://github.com/mailgun/mailgun.js?tab=readme-ov-file#create
// react forms:  https://docs.netlify.com/forms/setup/#work-with-javascript-rendered-forms
// ? Instead of using netlify functions ( because the forms are limited to 100 a month, mailgun allows 20k a month, I rather use a personal function and validate all the forms with mailgun and captcha :Thinking emoji:)
// ? Just call this on the react form lol
// const formData = require('form-data');
// const Mailgun = require('mailgun.js');

// import type { Request, Context } from "@netlify/functions"

import formData from 'form-data';
import Mailgun from 'mailgun.js';
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

export default (req, context) => {
  console.log(`🚀 ~ context:`, context)
  console.log(`🚀 ~ req:`, req)


  // mg.messages.create('sandboxf3dc50b9e99d4bef823fe3a888e49e3a.mailgun.org', {
  //   from: "Mailgun Sandbox <postmaster@sandboxf3dc50b9e99d4bef823fe3a888e49e3a.mailgun.org>",
  //   to: ["kevin.a.muniz@gmail.com"],
  //   subject: "Hello",
  //   text: "Testing some Mailgun awesomness!",
  //   html: "<h1>Testing some Mailgun awesomness!</h1>"
  // })
  // .then(msg => console.log('msg: ', msg)) // logs response data
  // .catch(err => console.error('error: ',err)) // logs any error

}
