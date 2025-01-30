const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to retrieve user' });
    } else if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!'})
})
app.listen(3000, () => console.log('Server listening on port 3000'));