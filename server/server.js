// const axios = require('axios')
const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require('bcrypt')
const mongoose = require("mongoose");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const access = require('./routes/login');
const addblog = require('./routes/addblog');
const { post_category, post_category_data } = addblog
const {login, register } = access;
// const post_category_data = require('./routes/addblog')
// const {Tag, PostCategory, Category, Comment, Post, Author} = databaseSchema;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


mailchimp.setConfig({
  apiKey: "1d6f86c13e768bc7edd4525de253bedc",
  server: "us21",
});





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
app.use(register);


//Create acc rouets
app.use(login)
//upload post data

// add category
app.use(post_category)
// add category data
app.use(post_category_data)

app.post("/api/mail", async (req,res)=>{
  console.log(req.body);
  email = req.body.email;

  try {
    const response = await mailchimp.lists.addListMember('c769272e40', {
      email_address: email,
      status: 'subscribed',
    });

    console.log(response);
    res.status(200).json({ subbed: true, error:"Subscription successful"});
  } catch (error) {
    console.error(error);
    if (error.response && error.response.data && error.response.data.detail) {
      const errorMessage = error.response.data.detail;
      res.status(400).json({ subbed: false, error: errorMessage });

    } else {
      res.status(500).json({ subbed: false, error: 'Failed to subscribe email' });


    }
  }
  
})




// 1d6f86c13e768bc7edd4525de253bedc-us21
// c769272e40



// run();
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
