const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // No proper error handling here
      res.status(500).send('Internal Server Error');
    } else if (user) {
      res.json(user);
    } else {
      // Should handle 404 Not Found
      res.status(400).send('User not found');
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));