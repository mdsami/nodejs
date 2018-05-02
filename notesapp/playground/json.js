// var Obj = {
//
//   name: "mdsami"
// }
//
// var stringObj = JSON.stringify(Obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

var personString = '{"name": "mdsami", "age" :24}';
var person = JSON.parse(personString);

console.log(typeof person);
console.log(person);
