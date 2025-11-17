import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './db/connection';
import userRoutes from './routes/users';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
// BUG #1: Missing CORS middleware (cors package not installed and not configured)
// This will cause frontend API calls to fail with CORS errors

// Routes
app.use('/api/users', userRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// BUG #2: Missing await - server starts before database connection is established
// This can cause race conditions where requests fail because DB isn't ready
async function startServer() {
  try {
    connectToDatabase(); // MISSING AWAIT HERE!

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
