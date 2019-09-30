const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
   content: {type: "String", required: true},
   author: {type: "String", required: true},
   postId: {type: "String", required: true},
   dateAdded: {type: "Date", default: Date.now, required: true}
});

module.exports = mongoose.model("Comment", Comment);
