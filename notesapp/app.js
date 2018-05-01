console.log('Starting apps');

const fs = require('fs');

const os = require('os');

const notes = require('./notes.js');

const _ = require('lodash');


var filterArray =  _.uniq([ 'Hridika',15,'Hridika', 1, 2, 3,3]);
console.log(filterArray);

// console.log(_.isString(true));
// console.log(_.isString('mdsami'));
//console.log('Result:', notes.add(9, -5));


// var res = notes.addNote();
//
// console.log(res);


// var  user = os.userInfo();

//fs.appendFileSync('mdsami.txt', 'I Love you Hridika ' + user.username + 'love');

// fs.appendFileSync('greeting.txt',  `Hello ${user.username}! + You are ${notes.age}.`);

 //console.log(user);

//fs.appendFile('Hridika.txt', 'I Love you Hridika');


// fs.appendFile('Hridika.txt', 'I Love you Hridika', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });
//
// fs.appendFileSync('mdsami.txt', 'I Love you mdsami > Hridika ', 'utf8');
