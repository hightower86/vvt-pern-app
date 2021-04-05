require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

//app.use(express.static(path.join(__dirname, 'client', 'build')));
//app.use(express.static('./client/build'));

if (process.env.NODE_ENV === 'production') {
  //server static content
  // yarn build
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}

app.use(errorHandler);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
