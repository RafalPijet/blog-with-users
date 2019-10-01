const User = require('../models/user.model');
const uuid = require('uuid');

exports.getUserByLogin = async (req, res) => {

    try {
        res.status(200).json(await User.findOne({"email": req.query.email}));
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.addUser = async (req, res) => {

    try {
        let newUser = new User(req.body);
        newUser.id = uuid.v4();
        res.status(200).json(await newUser.save())
    } catch (err) {
        res.status(500).json(err)
    }
};
