const express = require('express');
const app = express();

// GET /hello - returns "Hello World"
app.get('/hello', (req, res) => {
  res.send('Hello World');
});

// GET /hello/:name - returns "Hello {name}"
app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
