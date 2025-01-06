
import express from 'express';
import router from './routers/index.js';
import sequelize from './db/connection.js';

const App = express();


// Middleware to parse JSON request body
App.use(express.json());

// Initialize ChromaDB client

App.use(router);

const PORT = 8081;
App.listen(PORT, async (err) => {
  if (err) throw err;
  try {
    await sequelize.sync();
    console.log("DB Connected");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log("Your server is running on port", PORT);
});
