const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.route('/posts').get(postController.getPosts);
router.route('/posts/random').get(postController.randomPost);
router.route('/posts/:id').get(postController.getPost);
router.route('/posts').post(postController.addPost);
router.route('/posts').put(postController.updatePost);
router.route('/posts/:id/:isUp').put(postController.setThumb);

module.exports = router;
