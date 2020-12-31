// Modules
const avgAndHighest = require('./routes/avgAndHighest');
const candidates = require('./routes/candidates');
const testScores = require('./routes/testScores');
require('dotenv').config();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const { connect } = require('mongoose');
const express = require('express');
const app = express();

// Database Connection
connect(process.env.DB_CONN, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('Connected to database...'))
  .catch((error) =>
    console.log(`Error connecting to the database. \n${error.message}`)
  );

// Middlewares
app.use(express.json());
app.use('/api/candidates', candidates);
app.use('/api/test-scores', testScores);
app.use('/api/scores', avgAndHighest);

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
