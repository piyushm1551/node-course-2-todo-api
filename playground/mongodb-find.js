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

  db.collection('Users').find({
    name : 'Piyush'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch todos', err);
  })



  // db.collection('Todos').find({_id :new ObjectId('59c22e97d498d81c017fbb0c')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count : ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });

//  db.close();
});
