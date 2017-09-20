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

  // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // })

//   db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
// console.log(result);
//   });
//   db.collection('Users').deleteMany({name:'Piyush'}).then((result) => {
// console.log(result);
//   });

  db.collection('Users').findOneAndDelete({_id :new ObjectId('59c2365e09c8e61faaa4e7ab')}).then((result) => {
    console.log(result);
  },(err) => {
       console.log('Unable to fetch todos',err);

  });


});
