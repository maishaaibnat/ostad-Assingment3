const express = require('express');
const app = express();
const helloRoutes = require('./routes/helloRoutes');
const tokenRoutes = require('./routes/tokenroutes');
const authRoutes = require('./routes/authRoutes');

// Middleware to parse request body as JSON
app.use(express.json());

// Routes
app.use('/api', helloRoutes);
app.use('/api', tokenRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
