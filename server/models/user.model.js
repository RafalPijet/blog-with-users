const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    id: {type: "String", required: true},
    firstName: {type: "String", required: true},
    lastName: {type: "String", required: true},
    email: {type: "String", required: true, unique: true},
    password: {type: "String", required: true},
    posts: [{type: Schema.ObjectId, ref: "Post"}]
});

function populatePosts(next) {
    this.populate('posts');
    next();
}

User.pre('findOne', populatePosts);

module.exports = mongoose.model("User", User);
