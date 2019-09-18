const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/posts', (req, res) => {
   const data = [{id: "1", title: "Lorem Ipsum", content: "<p>Neque porro quisquam est qui<u> dolorem ipsum quia dolor sit amet</u>, consectetur, adipisci velit</p>"},
       {id: "2", title: "Lorem Ipsum II", content: "<i>Second Test content<i><b> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur</b>,<i> adipisci velit </i>"}];
   res.json(data);
});

app.listen(7000, () => {
    console.log('Server is running on port 7000')
});
