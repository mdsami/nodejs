console.log('starting note.js ');

//console.log(module);

// module.exports.age = 24;

//module.exports.addNote = function ()

var addNote = (title, body) => {

  console.log('Adding Note', title, body);
};

var getAll = () => {

  console.log('Getting All Note');
};

var readNote = (title) => {

  console.log('Getting  Note', title);
};

var removeNote = (title) => {

  console.log('Removing  Note', title);
}

module.exports = {

  addNote,
  getAll,
  readNote,
  removeNote

};
