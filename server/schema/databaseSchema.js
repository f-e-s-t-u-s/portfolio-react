// const mongoose = require("mongoose");
// const ObjectId = require('mongoose')


// const postSchema = new mongoose.Schema({
//   // author id
//   title: String,
//   summary: String,
//   content: String,
//   comment: String,
//   // postCategory: ObjectId,
//   author : String
// });

// const post_commentSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });


// // ! Category Schema

// const categorySchema = new mongoose.Schema({
//   title: String,
  
// });
// // ! post_categoryschema
// const post_categorySchema = new mongoose.Schema({
//   Author: ObjectId,
//   tag_id: ObjectId,
//   image : {
//     contentType: String,
//     data : Buffer,
//   },
//   heading: String,
//   meta : String,
//   category_id: ObjectId,
//   date: Date.now()
// });

// const tagSchema = new mongoose.Schema({
//   content: String,
// });

// const Author = mongoose.model("Author", authorSchema);
// const Post = mongoose.model("Post", postSchema);
// const Comment = mongoose.model("Comment", post_commentSchema);
// const Category = mongoose.model("Category", categorySchema);
// const PostCategory = mongoose.model("PostCategory", post_categorySchema);
// const Tag = mongoose.model("Tag", tagSchema);


// module.exports = {Tag, PostCategory, Category, Comment, Post, Author}