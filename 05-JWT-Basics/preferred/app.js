require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const helloRoute = require('./routes/hello');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use('/api/v1', helloRoute);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();