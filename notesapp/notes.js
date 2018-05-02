console.log('starting note.js ');


const fs = require('fs');

var addNote = (title, body) => {

  var notes = [];
  var note = {

    title,
    body
  };

  try{
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  }catch (e) {

  }



  notes.push(note);
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
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
