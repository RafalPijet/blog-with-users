const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.plugin(schema => {schema.options.usePushEach = true});

const Post = new Schema({
    id: {type: "String", required: true},
    title: {type: "String", required: true},
    content: {type: "String", required: true},
    author: {type: "String"},
    votes: {type: "Number", required: true},
    comments: [{type: Schema.ObjectId, ref: "Comment"}]
});

function populateComments(next) {
    this.populate('comments');
    next();
}

Post.pre('find', populateComments);
Post.pre('findOne', populateComments);

module.exports = mongoose.model("Post", Post);
