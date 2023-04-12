const express = require("express");
const path = require("path");
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, "./02-express-tutorial/main-new-public/index.html")
//   );
// });
app.use(express.static("./02-express-tutorial/main-new-public"));

app.get('/sample',(req,res)=> {
    res.status(200).send("<h1>This is working</h1>");
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource Not Found</h1>");
  });

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
