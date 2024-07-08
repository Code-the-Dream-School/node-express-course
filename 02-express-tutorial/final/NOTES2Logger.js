const logger = (req, res, next) => {
    const method = req.method; 
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send('Testing');
    //must invoke next() or res.send() here 
    next();
}

module.exports = logger;

//move logger function to keep app.js lean easier to navigate 
//also if you had 50 routes - reuse it 