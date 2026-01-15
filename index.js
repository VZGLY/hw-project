const express = require('express');
const app = express();
const port = 3000;

// Route de base
app.get('/', (req, res) => {
  res.send('Hello Moon!');
});

app.listen(port, () => {
  console.log(`Application lancée sur http://localhost:${port}`);
});