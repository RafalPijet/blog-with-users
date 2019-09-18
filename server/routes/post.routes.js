const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.route('/posts').get(postController.getPosts);

module.exports = router;
