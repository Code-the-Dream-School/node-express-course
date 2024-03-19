const express = require("express");
const { products,people } = require("./data");
const  peopleRouter  = require("./routes/people");
// const cookieParser = require("cookie-parser");

const app = express();
// app.use(cookieParser());

// const auth = (req, res, next) => {
//   const { user } = req.cookies.name
// }
//  req => middleware => res
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  // res.send("testing")
  next()
}
// app.use(logger);
// static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/people", peopleRouter);

app.get('/', logger, (req, res) => {
  res.send('Home')
})
// app.get('/api/v1/people', (req, res) => {
//   res.status(200).json({ success: true, data: people })
// })
// app.post('/api/v1/people', (req, res) => {
//   const { name } = req.body
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'please provide a name' })
//   }
//     // Add new person to the people array
//     const newPerson = { id: people.length + 1, name: name };
//     people.push(newPerson);
  
//     // Send response
//     res.status(201).json({ success: true, person: newPerson })
  
//   // res.status(201).json({ success: true, person: name })
// })
app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
// app.get("/api/v1/products/:productID", (req, res) => {
//   const idToFind = parseInt(req.params);
//   const product = products.find((p) => p.id === idToFind);
//   if (!product) {
//     // res.json({message: "That product was not found."})
//     return res.status(404).json({ message: "That product was not found." });
//   }
//   res.json(product);
// });

// app.get("/api/v1/products", (req, res) => {
//   const { products } = require("./data");

//   if (products === undefined) {
//     // console.log("The products data is undefined.");
//     return res.status(404).json({ message: "That product was not found." });
//     // Handle the case where products is undefined
//   } else if (Array.isArray(products) && products.length > 0) {
//     // console.log("The products data is not empty.");
//     let fProducts = [...products];
//     res.json(fProducts);
//     //  handling the non-empty products array
//   } else if (Array.isArray(products) && products.length === 0) {
//     // console.log("The products data is empty.");
//     return res.status(404).json({ message: "That product was not found." });
//     // handling the empty products array
//   } else {
//     // console.log("The products variable is not an array.");
//     return res.status(404).json({ message: "That product was not found." });
//     //handling other cases
//   }
// });

// app.get("/api/v1/query", (req, res) => {
//   // console.log(req.query)
//   const { search, limit } = req.query;
//   // console.log(search);
//   // console.log(limit);
//   let filteredProducts = [...products]; // Copy the products array
//   if (search) {
//     filteredProducts = filteredProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     filteredProducts = filteredProducts.slice(0, Number(limit));
//   }
//   if (filteredProducts.length < 0) {
//     // res.status(200).send('no products matched your search');
//     return res.status(200).json({ sucess: true, data: [] });
//   } else {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price > 20.0
//     );

//     res.status(200).json(filteredProducts);
//   }
// });

// app.all("*", (req, res) => {
//   res.status(404).send("page not found");
// });



