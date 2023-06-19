// const axios = require('axios')
const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require('bcrypt')
const mongoose = require("mongoose");
const userschema = require("./schema/userSchema")


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//Mpmgo connnection
const conn_string = "mongodb://127.0.0.1:27017/blogs";

const connnection = async () => {
  const conect = await mongoose.connect(conn_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return conect;
};


//Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userschema.findOne({email:email})

  //check if user exists
  if(!user){
    return res.json({error: 'User does not exist', status:400, logged:false})
  }
  //check correct password
  const validPass = await bcrypt.compare(password, user.password)

  if(!validPass){
    return res.json({error: 'Invalid login Deatails', status:400, logged:false})
  }
  res.json({status:200, logged:true})

  console.log(req.body);
});


//Create acc rouets
app.post("/api/create", async (req, res)=>{
    const userPresent = await userschema.findOne({ $or: [{email: req.body.email} , {username: req.body.username} ]})
    //check if user is in database both username and email
    if(userPresent) return res.json({error: 'User already exists'})

    const hashedPass = await bcrypt.hash(req.body.password, 10)
    const values = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
    }
    const create_new_user = await userschema.create(values)
    //check if user is created
    if(!create_new_user) return res.json({error: 'Failed to add user'})

    res.json({
        logged:true,
        status: 200,

    });

    console.log(req.body);
})





connnection()
  .then(
    app.listen(8000, () => {
      console.log("database is connected");
      console.log("Server is lisening on http:localhost:8000");
    })
  )
  .catch((err) => {
    console.log(err);
  });
