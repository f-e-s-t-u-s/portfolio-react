const mongoose = require("mongoose");
// const ObjectId = require('mongoose')


const post_categorySchema = new mongoose.Schema({
  // Author: ObjectId,
  // tag_id: ObjectId,
  image : {
    contentType : {
      type :String,
      required : true,
    },
    data : {
      type: Buffer,
      required : true,
    }
  },
  heading: {
    type: String,
    required : true,
  },
  meta: {
    type : String,
    required : true,
  },
  // category_id: ObjectId,
  date: {
    type: Date,
    value: Date.now(),
  },
});






const categorySchema = new mongoose.Schema({
    category: String,
})


const post_categoryCollection = mongoose.model(
    "post_categoryCollection",
    post_categorySchema
  );
const categoryCollection  = mongoose.model("categoryCollection",categorySchema )  

module.exports = {post_categoryCollection, categoryCollection};

