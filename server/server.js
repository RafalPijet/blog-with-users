const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/posts', (req, res) => {
   const data = [{id: 1, title: "Test title", content: "Test content"},
       {id: 2, title: "Second Test title", content: " Second Test content"}];
   res.json(data);
});

app.listen(7000, () => {
    console.log('Server is running on port 7000')
});
