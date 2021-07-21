const express = require('express');
const app = express();
const { mongoose }  = require('./db/mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


// load in the mongoose models

    // const { List } = require('./db/models/list.model');
    // const { Task } = require('./db/models/task.model');
    // const { User }= require('./db/models/index');

const { List,Task } = require('./db/models');

// load middleware 
// app.use(bodyParser.json);

// CORS HEADER MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors());


// Route handlers


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
    });
});

// PaATCHh/lists
// Purpose: Update a list
app.patch('/lists/:id' , (req,res) => {
    // we want to update a specified list
    List.findOneAndUpdate({ _id: req.params.id },{
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });

});

 // Purpose: Delete a list
app.delete('/lists/:id', (req,res) => {
    List.findOneAndRemove({
        _id: req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    });
});


// Purpose: Get all tasks in a specific list

app.get('/lists/:listId/tasks', (req, res) => {
   // We want to return all tasks that belong to a specific list (specified by listId)
   Task.find({
       _listId: req.params.listId
   }).then((tasks) => {
       res.send(tasks);
   })
});

// app.get('/lists/:listId/tasks/:taskId', (req,res) => {
//     Task.findOne({
//         _id: req.params.taskId,
//         _listId: req.params.listId
//     }).then( (task) => {
//         res.send(task);
//     });
// })

// purpose: Create a new task in a specific list
app.post('/lists/:listid/tasks', (req,res) =>{
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listid
    });
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc);
    });
});

// Purpose: Update an existing task
app.patch('/lists/:listId/tasks/:taskId', (req , res) => {
    Task.findOneAndUpdate({
        _id:req.params.taskId,
        _listId:req.params.listId
    },
    {
        $set: req.body
    }
    ).then(() => {
        res.sendStatus(200);
    });
})

// Purpose: Delete a task

app.delete('/lists/:listId/tasks/:taskId', (req,res) => {
    Task.findOneAndRemove({
        _id:req.params.taskId,
        _listId:req.params.listId
    }).then((removeTask) => {
        res.send(removeTask);

    });
})


// USER ROUTE
// Post/users
// purpose: sign up

app.post('/user',(req,res) => {
    // user sign up
    let body = req.body;
    let newUser = new User 
})





app.listen(3000, () => {
    console.log('Server is listing on port 3000');
});