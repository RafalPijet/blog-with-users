const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.route('/posts').get(postController.getPosts);
router.route('/posts/:id').get(postController.getPost);
router.route('/posts').post(postController.addPost);

module.exports = router;
