const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'john'){
        req.user = {name: 'john', id : 3}
        next()
    }
    else{
        // res.status(401).send('unauthorized');
        res.status(400).json({ success: false, message: "Please provide correct name" });
    }
    // console.log('authorize')
    // next()
}


module.exports = authorize