const mongoose = require("mongoose");
const Product = require('../models/Product.js');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        category: { type: String, required: true },
    },
    { timestamps: true } // Tự động thêm createdAt và updatedAt
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
