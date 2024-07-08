//Now with query string 
const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'john'){
        req.user = {name:'john', id:3}
        next()
    } else{
        res.status(401).send('unauthorize')
    }
}

module.exports = authorize; 

//middleware is EVERYWHERE 
//TWO common questions= if we have access to app.use are we going to add it to the route 
// app.get('/api/items',[logger, authorize],(req, res) => {
//     res.send('Items')
//     console.log(req.user);
// })
//WHAT ARE OUR MIDDLEWARE OPTIONS???
//We CAN set it up on our own, we can use express, OR third party 
//Ex third party called Morgan - you need to install, go to npm and search morgan, npm i morgan, needs to be in app.use 

//network will be 401 if John is not used 


//original 
// const authorize = (req, res, next) => {
//     console.log('authorize')
//     next()
// }

// module.exports = authorize; 