const express = require("express");
const path = require("path");
const app = express();
const  consoleLog  = require('../practice-middleware');

/* middleware set up */
app.use([consoleLog]);

app.use(express.static("./index.html"));

/* sending the file to local host */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./index.html"));
});

/* SAMPLE page */
app.get('/sample', (req, res) => {
    console.log('This is working')
})

/* server for data */
app.listen("3000", (req, res) => {
    console.log('Listening to port 3000');
});
