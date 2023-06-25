const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  passwordHash: String,
  profile: String,
});

const postSchema = new mongoose.Schema({
  // author id
  title: String,
  summary: String,
  content: String,
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  postCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PostCategory",
  },
  author : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Author"
  }
});

const post_commentSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const categorySchema = new mongoose.Schema({
  title: String,
  content: String,
});

const post_categorySchema = new mongoose.Schema({
  Author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const tagSchema = new mongoose.Schema({
  content: String,
});

const Author = mongoose.model("Author", authorSchema);
const Post = mongoose.model("Post", postSchema);
const Comment = mongoose.model("Comment", post_commentSchema);
const Category = mongoose.model("Category", categorySchema);
const PostCategory = mongoose.model("PostCategory", post_categorySchema);
const Tag = mongoose.model("Tag", tagSchema);


module.exports = {Tag, PostCategory, Category, Comment, Post, Author}