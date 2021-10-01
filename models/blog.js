const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique:true
  },
  desc: {
    type: String,
    required: true, 
  },
  photo: {
    type: String,
    required: false
  },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;