// Import Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Set the port for the server to listen onst port = 3000;

// Define a simple route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

