
const express = require('express')
const cors = require('cors')
const app = express()

const peopleRouter = require('./routes/people')
const auth = require("./routes/auth")

app.use(cors());
app.use(express.static('./methods-public'))

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().toDateString()
    console.log(method, url, time)
    next()
}
app.get('/', logger, (req, res) => {
    console.log(method, url, time)
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(auths)
app.use('/api/v1/people', peopleRouter)
app.use('/login', auth)

// app.get('/api/v1/people', (req, res) => {
//     res.status(200).json({ data: people })
// })

// app.post('/api/v1/people', (req, res) => {

//     const { name } = req.body
//     console.log(name)
//     if (name) {
//         people.push({ id: people.length + 1, name: req.body.name });
//         console.log(people)
//         return res.status(201).json({ success: true, name: req.body.name });
//     }
//     res.status(400).send({ success: false, message: "please provide a name" })
// })

// app.post('/login',(req,res)=>{
//     console.log(req.body)
//     const {name} = req.body
//     if (name) {
//        return res.status(401).send(`Welcome ${name}`)
//         }
//         res.status(201).send('Please provide a name' )
// })


// app.get('/api/v1/test', (req, res) => {
//     res.json({ message: 'It worked!' })
// })

// app.get('/api/v1/products', (req, res) => {
//     console.log(req.params)
//     res.json(products)
// })

// app.get('/api/v1/products/:productsID', (req, res) => {
//     const product = products.find((p) => p.id == Number(req.params.productsID))
//     if (product) {
//         res.json(product)
//     } else {
//         res.status(404).json({ message: 'That product was not found.' })
//     }

// })

// app.get('/api/v1/query', (req, res) => {
//     console.log(req.query)
//     const { search, limit ,price } = req.query
//     let sortedProducts = [...products]

//     console.log(price)

// if (search) {
//     sortedProducts = sortedProducts.filter((p) => {
//         return p.name.startsWith(search)
//     })
// }

//     if (search) {
//         const regSearch = new RegExp(`${search}`,'gi')
//         sortedProducts = sortedProducts.filter((p) => {
//             return regSearch.test(p.name)
//         })
//     }

//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }

//     if (price) {
//         sortedProducts = sortedProducts.filter((p)=>{
//             return Math.floor(p.price) < Number(price)
//         })
//     }


//     res.status(200).json(sortedProducts)
//     res.send('hello world')

// })

// app.get('/', (req, res) => {
//     res.status(200).send('Home page')
// })

// app.get('/about', (req, res) => {
//     res.status(200).send('About page')
// })

// app.all('*', (req, res) => {
//     res.status(404).send('<h1>resource not found</1>')
// })



app.listen(3000, () => {
    console.log(`server is running on 3000`)
})




