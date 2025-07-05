// server.js ✦ phiên bản chuẩn chạy Render Node.js ESM hoặc CJS
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Render dùng biến môi trường PORT

app.use(express.json());

app.post('/api/ecosystem/query', (req, res) => {
  const { intent } = req.body;

  if (!intent) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing intent in request body',
    });
  }

  res.json({
    status: 'ok',
    shimmer: '🫧 intent received',
    received_intent: intent,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`✨ Kai is shimmering at http://localhost:${PORT}`);
});
