
import express from 'express';
import router from './routers/index.js';

const App = express();


// Middleware to parse JSON request body
App.use(express.json());

// Initialize ChromaDB client

App.use(router);

const PORT = 8080;
App.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
