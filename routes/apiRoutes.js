const apiRouter = require('express').Router();
const { readFile, writeFile } = require('fs');
const utils = require('util');
const { join, parse } = require('path');
// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuid = require('uuid');

//  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
apiRouter.get('/notes', (req, res) => {
  readFile(join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(JSON.parse(data));
    }
  })
})

//* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
apiRouter.post('/notes', (req,res)=> {
  //destructuring the items in req.body
  const {title, text} = req.body; 


  if(req.body) {
    const newNote = { title, text, id: uuid() };

    readFile('./db/db.json', 'utf8', (err,data)=> {
      if (err) {
        console.log('Error: cannot read db.json');
      }
      else {
        //convert the string of db into json object
        const parsedDb = JSON.parse(data);
        
        //add new note onto the existing notes
        parsedDb.push(newNote);

        //write updated review back to db file
        writeFile('./db/db.json', JSON.stringify(parsedDb), err=>console.log(err))
      }
    })
    const response = {
      status: 'success',
      body: 'newNote'
    };
    console.log(response);
    res.json(response);
  }
  else {
    res.json('Error in posting note')
  }
  
})

apiRouter.post
//* DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
module.exports = apiRouter;