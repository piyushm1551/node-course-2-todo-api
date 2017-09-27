var express = require('express');
var bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var  {Todo} = require('./models/todo');
var  {Users} = require('./models/user');
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
//console.log(req.body);
var todo = new Todo ({
  text : req.body.text
});
todo.save().then((doc) => {
  res.send(doc);
},(e) => {
  res.status(400).send(e);
});

});

app.get('/todos',(req,res) => {
Todo.find().then((todos) => {
res.send({todos});
},(e) => {
res.status(400),send(e);
})
})

app.get('/todos/:id',(req,res) => {
  //res.send(req.params);
  var id = req.params.id;
  if(!ObjectId.isValid(id)){
return res.status(404).send('Invalid id');
  }
  Todo.findById(id).then((todo) => {
    if(!todo)
    {
      return res.status(404).send('could not find');
    }
  res.send({todo});
}).catch((e) => res.status(400).send('error'));


});


app.listen(port,() => {
  console.log(`started on port ${port}`);
});

module.exports = {app};
