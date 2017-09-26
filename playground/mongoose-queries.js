const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user')

// var id = '59ca2f1919012fdf37ccebc7';
//
// if(!ObjectId.isValid(id))
// {
//   console.log('Id not valid');
// }
// Todo.find({
//   _id : id
// }).then((todos) => {
// console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
// console.log('Todos',todo);
// });
//

// "_id" : ObjectId("59c3555d754f1ea612a5cb9a"),
var email = "piyush.maharana@hashtaag.com";
//     "__v" : 0

// Todo.findById(id).then((todo) => {
//   if(!todo)
//   {
//     return console.log('id not found');;
//   }
// console.log('Todo By Id',todo);
// }).catch((e) => console.log(e));
Users.findById('59c3555d754f1ea612a5cb9a').then((user) => {
if (!email) {
return console.log('email not found');;
}
console.log(JSON.stringify(user));
}).catch((e)=>console.log(e));
