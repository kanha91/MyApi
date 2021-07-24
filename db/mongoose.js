// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');


// mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://kanha91:Kanha@cluster0.gmiue.mongodb.net/Kanha?retryWrites=true&w=majority',
{useNewUrlParser: true , useUnifiedTopology: true }).then( () => {
    console.log('Connected To Mongoose SuccessFully');
}).catch( (e) => {
    console.log('Error while attempting to connect Mongoose');
    console.log(e)


});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};