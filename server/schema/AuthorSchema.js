const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    first_name: String,
    last_name : String,
    email:{
        type : String,
        unique : true,
    },
    passwordHash : String,
    username: {
        type :String,
        unique: true,
    },
   
   lastLogin: {
    type: Date,
    value: Date.now()
   },
   registeredAT : {
    type: Date,
    value: Date.now(),
   }
    
})
const authorCollection = mongoose.model("authorCollection", authorSchema)

module.exports = authorCollection;