const { List } = require('./list.model');
const { Task } = require('./task.model');
const { User } = require('./user.model');


module.exports = {
    List,
    Task,
    User
}

// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     _id:mongoose.Schema.Types.ObjectId,
//     Name:String,
//     Email:String,
//     Address:String
// });

// const User = mongoose.model('users',UserSchema);

// module.exports = { User };


// const mongoose = require('mongoose');
// let userSchema = new mongoose.Schema({
//     _id:mongoose.Schema.Types.ObjectId,
//     Name:String,
//     Email:String,
//     Address:String
// });

// module.exports = mongoose.model('users', userSchema);
