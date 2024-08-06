require('dotenv').config();
const express = require('express');
const sequelize = require('sequelize');
// const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

// app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
