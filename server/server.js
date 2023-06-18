const axios = require('axios')
const express = require('express')
const dotenv = require('dotenv')
const app = express();


dotenv.config();

const port = process.env.PORT
app.listen(port, ()=>{
    console.log("server is listening on port 8000");
})