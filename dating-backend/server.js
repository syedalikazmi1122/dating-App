const app = require('./app');
const connectDB = require('./src/config/db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});