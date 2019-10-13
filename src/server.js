const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/todo.js');
const app = express();
const port = 3000;


mongoose.connect('mongodb://localhost/todoDatabase', // Must come from the config file
  { useNewUrlParser: true, useCreateIndex: true })
  .then(() => { console.log('Connected to mongoDB'); })
  .catch(err => { console.error('could not connect to mongo', err) });

app.use(express.json());

// To do Module
/* /api/todolist get
   /api/todolist post
   /api/todolist/:id get
   /api/todolist/:id delete
   /api/todolist/:id put
*/

app.get('/api/todolist', (req, res) => {
    const getTodoItems = async () => {
        let todoItems;
        try {
          todoItems = await Todo.find();
        } catch (err) {
          console.log(err);
          return res.send("Something unexpected occured");
        };
        return res.send(todoItems);
      };
      getTodoItems();
});

app.post('/api/todolist/', (req, res) => {
    const createTodo = async () => {
        let todoItem;
        // Create to do item
        todoItem = new Todo({
          content: req.body.content,
          id: req.body.id,
          checkedDays: req.body.checkedDays
        });
        // Save to do item
        todoItem.save().then(() => {
          res.send();

        }).catch((err) => {
          console.log(err);
          return res.send("Could not create the todo item.");
        });
      };
      createTodo();
});

app.listen(port, () => console.log(`app listening on port ${port}!`))