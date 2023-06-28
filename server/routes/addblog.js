const express = require('express');
const post_category_data = express.Router();
const post_category = express.Router();
const categorySchema = require("../schema/postSchema").post_categoryCollection;
const post_category_schema = require("../schema/postSchema").categoryCollection



post_category.post("/api/add-category", (req,res)=>{
    console.log(req.body);
})

post_category_data.post("/api/add-post", (req,res)=>{
    console.log(req.body);
})

module.exports = {post_category_data, post_category};
