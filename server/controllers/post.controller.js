const Post = require('../models/post.model');
const uuid = require('uuid');

exports.getPosts = async (req, res) => {

    try {
        res.status(200).json(await Post.find());
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getPost = async (req, res) => {

    try {
        res.status(200).json(await Post.findOne({id: req.params.id}));
    } catch (err) {
        res.status(200).json(err);
    }
};

exports.addPost = async (req, res) => {

    try {
        let newPost = await new Post(req.body);
        newPost.votes = 0;
        newPost.id = uuid.v4();
        let savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.updatePost = async (req, res) => {

    try {
        let post = await Post.findOne({id: req.body.id});
        post.title = req.body.title;
        post.author = req.body.author;
        post.content = req.body.content;
        let updatedPost = await post.save();
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};
