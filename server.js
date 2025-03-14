require('dotenv').config();
const express = require('express');
const connectDB = require('./schemmamongo/config/db'); // Import kết nối DB
const productRoutes = require('./schemmamongo/routes/productRoutes'); // Import routes


// Middleware
app.use(express.json());
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
