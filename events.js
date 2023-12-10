// const EventEmitter = require('events');
const School = require('./school');

const school = new School();

// const myEventEmitter = new EventEmitter();
// console.log(myEventEmitter);
// register listener for events belRing events
school.on('bellRing', ({ period, text }) => {
    console.log(`we need to listen ${period} ${text}`);
});
// console.log(school);
school.startPeriod();
// raise an event
/*
if we want to pass multiple parameters we can pass inside and object
*/
// setTimeout(() => {
//     myEventEmitter.emit('bellRing', {
//         period: 'first period',
//         text: 'ended',
//     });
// }, 2000);
