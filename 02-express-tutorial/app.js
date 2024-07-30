
// ----- week 4 ------ (week3 is all the way down)
const express = require("express")
const app = express()
const {product, people }= require('./data')
const peopleRouter = require('./routes/people')

const logger = (req, res, next) => {
    const method = req.method 
    const url = req.url 
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use("/api/v1/people", peopleRouter);


app.get('/api/v1/people', logger, (req, res) => {
    try {
        res.status(200).json({success: true, data: people})
    } catch (error) {
        console.log('There is an error: ' + error )
    }
})

app.post('/api/v1/people', logger, (req, res) => {
    if(!req.body) {
        res.status(400).json({ success: false, message: "Please provide a name"});
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name});
})



app.listen(3000, () => {
    console.log("Server is listing to port 3000...")
})


// // ------ Week 3 --------

// const port = 3000;
// const { products } = require("./data");

// app.use(express.static("./public"))

// app.get('/api/v1/test', (req, res) => {
//     res.json({ message: "It worked!" });
// })

// app.get('/api/v1/products', (req, res) => {
//     res.status(200).json(products)
// })

// app.get('/api/v1/products/:productID', (req, res) => {
//     const productId = parseInt(req.params.productID)
//     const product = products.find((product) => product.id === productId);
//     if (!product) {
//         return res.status(404).json({ message: "That product was not found. "})
//     }
//     res.status(200).json(product);
// })

// app.get('/api/v1/query', (req, res) => {
//     const { search, limit, price } = req.query;
//     let sortedProducts = [...products];
//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search);
//         })
//     }
//     if (price) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.price < parseFloat(price);
//         });
//     }
//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit));
//     }
    
//     if (sortedProducts.length < 1) {
//         return res.status(200).json({ success: true, data: []});
//     }
//     res.status(200).json({ success: true, data: sortedProducts });
// })

// app.all('*', (req, res) => {
//     res.status(404).send('Page not found');
// })

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


