//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectId} = require('mongodb');

// var obj = new ObjectId();
// console.log(obj);
//
// var user = {name: 'andrew',age: 25};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//
// db.collection('Todos').findOneAndUpdate({text : 'Eat lunch'},{$set: {completed : true}},{returnOriginal :false}).then((result) => {
// console.log(result);
// })


db.collection('Users').findOneAndUpdate({name : 'Pratyush'}
,{$set: {name : 'Piyush'},$inc: {age : 1}},{returnOriginal :false}).then((result) => {
console.log(result);
})
});
