// import {MessagesComponent} from '../messages.component';
// // Twilio Credentials
// const accountSid = 'AC59c0df042c18112df3a218b70ef88bfa';
// const authToken = '4077fe59c42e5c28ce6408f4b6d4b618';



// //require the Twilio module and create a REST client
// const client = require('twilio')(accountSid, authToken);
// let body = "This" + " is a test message";

// client.messages.create({
//     to: "+13173978857",
//     from: "+13173336853 ",
//     body: body,
// }, function(err, message) {
//     console.log(message.sid);
// });

let x = 'foo';
let y = 'oo';

console.log(x);
// console.log(x.indexOf(y))
console.log(x.includes(y));
if (x.includes(y)){
  console.log(y);
}else{
  console.log('shiz not workin')
}
