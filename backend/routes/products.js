// routes/products.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const Product = require('../models/Product');

// @route   GET api/products
// @desc    Get all products (with optional category filter)
// @access  Public
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const filter = category ? { category } : {};
        const products = await Product.find(filter);
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/products
// @desc    Add a new product
// @access  Private/Admin
router.post('/', [auth, admin], async (req, res) => {
    const { name, description, price, category, imageUrl, stock } = req.body;
    try {
        const newProduct = new Product({ name, description, price, category, imageUrl, stock });
        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private/Admin
router.delete('/:id', [auth, admin], async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });

        await Product.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Product removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;