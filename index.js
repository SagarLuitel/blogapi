const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const authRoutes = require('./routes/authRoutes')
const blogRoutes = require('./routes/blogRoutes')
const app = express ()
app.use(express.json());

dotenv.config()

mongoose.connect(process.env.Database_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(8080))
  .catch(err => console.log(err));



app.get('/',(req,res)=>{
    console.log("root url")
})

app.use(authRoutes)
app.use(blogRoutes)