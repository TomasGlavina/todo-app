const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  credentials: 'true',
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the ToDoList by Thong and Tomas. Please navigate to /api/v1/tasks');
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
