// server.js (or app.js)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
