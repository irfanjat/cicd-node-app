const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD demo!', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('App running on port 3000'));
}
