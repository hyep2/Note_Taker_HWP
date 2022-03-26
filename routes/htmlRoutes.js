const htmlRouter = require('express').Router();
const {readFile, writeFile} = require('fs');
const { join } = require('path');

//* GET `/notes` - Should return the `notes.html` file.
htmlRouter.get('/notes',(req,res)=> {
  res.sendFile(join(__dirname, '..', 'public', 'notes.html'));
});

//* GET `*` - Should return the `index.html` file
htmlRouter.get('*', (req,res)=>
  res.sendFile(join(__dirname, '..', 'public,' 'index.html'))
)

module.exports = htmlRouter; 