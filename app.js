const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// In-memory "database"
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple App!');
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// Add new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

//app.listen(PORT, () => {
  //console.log(`Server running on port ${PORT}`);
//});

module.exports = app;
