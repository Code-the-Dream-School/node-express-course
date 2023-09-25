// The idea is that one can search by any or all of these attributes: featured, name, price, rating, company
// For the numeric fields price and rating, one can also specify greater than, less than, or equal to
// One can also specify a sort order 
// Also one can specify a skip and a limit, to facilitate pagination through the result

const Product = require('../models/product');

// Two methods, getAllProducts and getAllProductsStatic
// The getAllProductsStatic method is just for experimentation
const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors');
    const search = 'ab';
    const products = await Product.find({ 
        // featured: true,
        // name: 'vase table',
        // page: '2',
        // name: 'albany ', // 'albany sectional',
        // name: {$regex: search, $options: 'i'},
        price: { $gt:30 }
    })
    // .sort('name')
    .sort('price')
    .select('name price')
    // .limit(10)
    // .skip(5)

    res.status(200)
    // .json({ msg: 'products testing route' })
    .json({ products, nbHits: products.length });
};

// search based on featured status, company, name, price & rating
const getAllProducts = async (req, res) => {
    // console.log(req.query);
    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const queryObject = {};

    // FILTER
    if (featured) {
        queryObject.featured = featured === 'true'? true : false // ternary operator
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        // queryObject.name = name;
        queryObject.name = { $regex: name, $options: 'i'}
    }
    if (numericFilters) {
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte'
        };
        const regEx = /\b(>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(
            regEx, 
            (match) => `-${operatorMap[match]}-`
        );
        // console.log(numericFilters);
        console.log(filters);
    }

    console.log(queryObject);

    // privide an option for the user to search based on a numeric condition


    // const products = await Product.find(req.query); 
    // // access to query string params in req.query --> object passed into find()
    // const products = await Product.find(queryObject);
    // const products = await Product.find(queryObject).sort();
    // let products = await Product.find(queryObject); // need to remove await
    let result = Product.find(queryObject);

    // SORT
    // sorting does not affect the number of items returned, just the order in which they are displayed
    if (sort) {
        // products = products.sort()
        // console.log(sort);
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }

    if (fields) {
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList);
    }

    // use skip and limit to set up a pagination functionality
    const page = Number(req.query.page) || 1
    const limit =   Number(req.query.limit) || 10
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);
    // 23 items by 7 items per page
    // 4 pages: 7 items, 7 items, 7 items, 2 items

    const products = await result;
    res.status(200).json({ 
        // msg: 'products route'
        products, nbHits: products.length 
    });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic
};