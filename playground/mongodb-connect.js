//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectId} = require('mongodb');

var obj = new ObjectId();
console.log(obj);

var user = {name: 'andrew',age: 25};
var {name} = user;
console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //     text: 'Something to do',
  //     completed: false
  // },(err , result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })

  // db.collection('Users').insertOne({
  //   name:'Piyush',
  //   age:22,
  //   location:'Bangalore'
  // },(err,result) => {
  //   if (err) {
  //     return console.log('Unable to Connect to Users',err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })


  db.close();
});
