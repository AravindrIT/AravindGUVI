const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT =3000;

app.get('/', (req, res) => {
res.send("Hello Aravind");
});
app.get("/home",(req, res) => {
    res.send("This is Home Page");
})
mongoose
.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('DB Connected!'));

app.listen(PORT, () => {
    console.log("Server is runnning on port:",PORT);
});

