const express = require('express');
const app = express();
const {mongoose} = require('./db/mongoose');
const bodyParser = require('body-parser');

// load in the mongoose models

    // const { List } = require('./db/models/list.model');
    // const { Task } = require('./db/models/task.model');

const { List,Task } = require('./db/models');

// load middleware 
app.use(bodyParser.json);

// Route handlers


//  List Routes
// GET/lists
// Purpose: Get all lists

app.get('/lists', (req, res) => {
    // res.send("WellCome Krishna");
    // we want to return an array of all lists in the database
    List.find({}).then((lists) => {
        res.send(lists);
    });

});
// POST/lists
// Purpose: Create a lists
app.post('/lists', (req , res) => {
    // we want to create a new lists
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        res.send(listDoc);
    })

});
// PaATCHh/lists
// Purpose: Update a list
app.patch('/lists/:id' , (req,res) => {
    // we want to update a specified list

});
// DELETE/lists
// Purpose: Delete a list
app.delete('lists/:id', (req , res) => {
    // We want delete a specified list

});


app.listen(7891, () => {
    console.log('Server is listing on port 2000');
});