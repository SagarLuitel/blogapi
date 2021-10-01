const Blog = require('../models/blog');


// sort blog from newest to oldest
module.exports.blog_index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.json("success"); 
    })
    .catch(err => {
      console.log(err);
    });
}
// create single blog and redirect to blog list
module.exports.blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then(result => {
      res.json("success"); 
    })
    .catch(err => {
      console.log(err);
    });
}


//find single blog by id
module.exports.blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.json("success"); 
    })
    .catch(err => {
      console.log(err);
    });
}



// delete blog by id
module.exports.blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ });
    })
    .catch(err => {
      console.log(err);
    });
}

// update single blog based on id
module.exports.blog_update = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, {
    $set: req.body,
  },)
    .then(result => {
      res.json("success");
    })
    .catch(err => {
      console.log(err);
    });
}



