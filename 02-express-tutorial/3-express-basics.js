const express = require("express");
const app = express();

// Home Page
app.get("/", (req, res) => {
    console.log("user hit the resource");
    res.status(200).send("Home Page");
});

// About Page
app.get("/about", (req, res) => {
    res.status(200).send("About Page");
});

// for every other page not noted
app.all("*", (req, res) => {
    res.status(404).send("<h1> resource not found</h1>");
});

app.listen(2222, () => {
    console.log("Server is listening to port 2222");
});

//app.get
//app.post
//app.put
//app.delete
//app.use
//app.listen
