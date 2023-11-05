// server.js (or app.js)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/notes', (req, res) => {
    // Implement the code to retrieve notes from a database or JSON file
  });
  
  app.post('/api/notes', (req, res) => {
    // Implement the code to save a new note
  });
  
  app.delete('/api/notes/:id', (req, res) => {
    // Implement the code to delete a note
  });
  