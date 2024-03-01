// Create web server
// Create a new web server using the express module
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.status(201).send('The comment has been created');
});

// Get all the comments
app.get('/comments', (req, res) => {
  res.status(200).send('The comments have been obtained');
});

// Get a comment by ID
app.get('/comments/:id', (req, res) => {
  res.status(200).send('The comment has been obtained');
});

// Modify a comment by ID
app.put('/comments/:id', (req, res) => {
  res.status(200).send('The comment has been updated');
});

// Delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  res.status(204).send('The comment has been deleted');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});