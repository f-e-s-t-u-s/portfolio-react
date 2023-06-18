const mongoose = require('mongoose')
const signupSchema = mongoose.Schema({
    user_name: String,
    email:{
        type: String,
        unique: true,
    },
    password: String,
    username: String
},
{
    collection: 'users'
})

const signup_collection = mongoose.model('users', signupSchema)
module.exports = signup_collection