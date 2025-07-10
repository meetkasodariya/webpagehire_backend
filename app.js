const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const developersRouter = require('./routes/developers');
require('dotenv').config();
const app = express();
 const PORT =process.env.PORT || 5000;

// Middlewar
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://meetkasodariya.github.io/hiring_page/'
}));
// Database connection
connectDB();
app.get('/', (req, res) => {
  res.send('API is running...');
});
// Routes
app.use('/api/developers',developersRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
