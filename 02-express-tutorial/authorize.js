
const authorize = (req, res, next) => {
    const { user } = req.query

    if (user === 'shy'){
        req.user = {name: 'shy', id: 3}
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize