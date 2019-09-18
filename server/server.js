const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const postRouter = require('./routes/post.routes');
const loadTestData = require('./dataTest');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', postRouter);

mongoose.connect(config.DB, {useNewUrlParser: true});
let db = mongoose.connection;
db.once('open', () => {
    console.log("Connected to database");
    loadTestData();
});
db.on('error', err => console.log("Error connection: " + err));

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
});

