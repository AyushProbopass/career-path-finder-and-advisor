const express = require('express');
const cors = require('cors');
const careerRoutes = require('./routes/career');

const app = express();
const PORT = process.env.PORT || 5000;

// Replace '*' with your real frontend URL in production (set below)
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({ origin: FRONTEND_URL }));

app.use(express.json());

app.use('/api/career', careerRoutes);

// simple root for smoke test
app.get('/', (req, res) => res.send('Backend is live'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});