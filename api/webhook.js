const express = require('express');
const app = express();

app.use(express.json());

// Webhookエンドポイント
app.post('/api/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.status(200).send('Webhook received successfully!');
});

module.exports = app;
