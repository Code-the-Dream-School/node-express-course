const logOn = (req, res) => {
    const { name } = req.body;
    if (name) {
        res.cookie('name', name);
        res.status(201).json({ message: `Hello, ${name}` });
    } else {
        res.status(400).json({ message: 'Name is required' });
    }
};

const logOff = (req, res) => {
    res.clearCookie('name');
    res.status(200).json({ message: 'Successfully logged off' });
};

const testAuth = (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user}` });
};

module.exports = {
    logOn,
    logOff,
    testAuth
}