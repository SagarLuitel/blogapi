const express = require('express');
const blogController = require("../controllers/blogController")

const router = express.Router();

// gets all post list
router.get('/', blogController.blog_index);
// creates new post
router.post('/', blogController.blog_create_post);
// get specific post
router.get('/:id', blogController.blog_details);
// delete specific post
router.delete('/:id', blogController.blog_delete);
// update specific post
router.put('/:id', blogController.blog_update);

module.exports = router;