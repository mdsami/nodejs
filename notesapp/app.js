console.log('Starting apps');

const fs = require('fs');
const _ = require('lodash');


const notes = require('./notes.js');

var command = process.argv[2];

console.log('command:', command);

if (command === 'add') {

  console.log('Adding New Notes');

} else if (command === 'list') {
  console.log('Listing of all Notes');
}else {
  console.log('command Not Recognize');
}

//console.log(process.argv);

// var filterArray =  _.uniq([ 'mdsmai',1,'Hridika', 1, 2, 3,3]);
// console.log(filterArray);

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
