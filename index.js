// Event Module
// Node Has InBuild Module Is called Events
// Where Ypu Can Create-, Fire-,and listen For Your OWn Event

// Example 1 - registering Event Call Only Once 

// Example 2 - Create Event Emmiter And Create Coupple of Callbacks 

// Example 3 - register Your Event With callback Parameter

const EventEmitter = require('events');
const event = new EventEmitter;
// Here The SayMyName Event Called
event.on('SayMyname',()=>{
    console.log("Hello My Name Is Shivraj")
})

event.on('SayMyname',()=>{
    console.log("Ramesh")
})
event.on('SayMyname',()=>{
    console.log("Khetri")
})
event.on('SayMyname',()=>{
    console.log("Kshetri")
})
// Here The event Is Created "SayMyName"
event.emit('SayMyname');


event.on('callback_fun',(Status_code,Msg)=>{
    console.log(`Here the Status Code ${Status_code} and the Msg ${Msg}`);
})


event.emit('callback_fun',200,"Here My Name is Shivraj")