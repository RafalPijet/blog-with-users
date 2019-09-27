const Post = require('../models/post.model');
const User = require('../models/user.model');
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
        let newPost = await new Post();
        newPost.title = req.body.title;
        newPost.author = req.body.author;
        newPost.content = req.body.content;
        newPost.votes = 0;
        newPost.id = uuid.v4();
        let selectedUser = await User.findOne({id: req.body.authorId});
        selectedUser.posts.push(newPost);
        let updatedUser = await selectedUser.save();
        await newPost.save();
        res.status(200).json(updatedUser);
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

exports.setThumb = async (req, res) => {

    try {
        const {id, isUp} = req.params;
        let selectedPost = await Post.findOne({id});

        if (JSON.parse(isUp)) {
            selectedPost.votes += 1;
        } else {
            selectedPost.votes -= 1;
        }
        await selectedPost.save();
        res.status(200).send();
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.randomPost = async (req, res) => {

    try {
        let posts = await Post.find();
        let randomNumber = await Math.ceil(Math.random() * posts.length) - 1;
        res.status(200).json(posts[randomNumber]);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getPostsWithRange = async (req, res) => {

    try {
        let {start, limit} = req.params;
        start = parseInt(start);
        limit = parseInt(limit);
        let posts = await Post.find();
        let amount = await Post.countDocuments();
        let result = [];

        for (let i = posts.length - 1; i > -1; i--) {
            result.push(posts[i]);
        }
        let selectedPosts = result.slice(start, start + limit);
        res.status(200).json({
            selectedPosts,
            amount
        });
    } catch (err) {
        res.status(500).json(err)
    }
};
