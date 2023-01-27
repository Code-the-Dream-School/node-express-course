const express = require("express");
const path = require("path");
const app = express();

/* setting up middleware */
app.use(express.static("./index.html"));

/* sending the file to local host */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./index.html"));
});

/* server for data */
app.listen("3000", (req, res) => {
    console.log("Listening to port 3000 - this is working ");
});
