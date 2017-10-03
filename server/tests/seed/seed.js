const {ObjectId} = require('mongodb');

const {Todo} = require('./../../models/todo');

const {Users} = require('./../../models/user');
const jwt = require('jsonwebtoken');


const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const users = [{
  _id : userOneId,
  email : 'piyush@example.com',
  password : 'userOnePass',
  tokens : [{
    access : 'auth',
    token : jwt.sign({_id : userOneId,access : 'auth'},'abc123').toString()
  }]
},{
_id : userTwoId,
email : 'abc@example2.com',
password : 'userTwoPass',
// tokens : [{
//   access : 'auth',
//   token : jwt.sign({_id : userTwoId,access : 'auth'},'abc123').toString()
//
// }]
}];
const todos = [{
  _id:new ObjectId(),
  text: 'First test todo'
},{
  _id:new ObjectId(),
  text: 'Second test todo',
  completed : true,
  completedAt : 333
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() =>{
    return Todo.insertMany(todos);
}).then(() => done());
};

const populateUsers = (done) => {
Users.remove({}).then(() => {
    var userOne = new Users(users[0]).save();
    var userTwo = new Users(users[1]).save();
    return Promise.all([userOne,userTwo])

  }).then(() => done());
};


module.exports = {todos,populateTodos,users,populateUsers};
