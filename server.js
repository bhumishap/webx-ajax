const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname)); // to serve client.html

const existingUsernames = ['john123', 'alice', 'bob007', 'sarah99', 'mike1', 'emmaW', 'robert_', 'nina22', 'harrypotter', 'ronald'];

app.post('/check-username', (req, res) => {
  const { username } = req.body;
  const exists = existingUsernames.includes(username);
  res.json({ exists });
});

app.post('/register', (req, res) => {
  const { username } = req.body;
  if (existingUsernames.includes(username)) {
    return res.json({ success: false });
  }
  // For this demo, we pretend to add the username.
  existingUsernames.push(username);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
