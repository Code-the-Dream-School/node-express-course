const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./public"));

const peopleRouter = require("../02-express-tutorial/public/router/people");
const productsRouter = require("../02-express-tutorial/public/router/products");

app.use("/api/v1/people", peopleRouter);
app.use("/api/v1/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
