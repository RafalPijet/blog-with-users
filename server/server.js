const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const path = require('path');
const config = require('./config');
const postRouter = require('./routes/post.routes');
const userRouter = require('./routes/user.routes');
const loadTestData = require('./dataTest');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', postRouter);
app.use('/api', userRouter);
app.use(helmet());
app.use(express.static(path.join(__dirname, '/../client/build')));

mongoose.connect(config.DB, {useNewUrlParser: true});
let db = mongoose.connection;
db.once('open', () => {
    console.log("Connected to database");
    loadTestData();
});
db.on('error', err => console.log("Error connection: " + err));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'))
});

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
});

