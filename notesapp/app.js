console.log('Starting apps');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

const argv = yargs.argv;
// var command = process.argv[2];
var command = argv._[0];

let str = 'i love you Soooooooo  damn much  Hridika';
for (let char of str) {
  console.log(char);
}


// console.log('process',process.argv);
console.log('Yagrs', argv);

console.log('command:', command);

if (command === 'add') {

  notes.addNote(argv.title, argv.body);

} else if (command === 'list') {
  notes.getAll();

} else if (command === 'read') {

  notes.readNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('command Not Recognize');
}



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
