const Post = require('../models/post.model');

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
