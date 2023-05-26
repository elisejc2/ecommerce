//user facing js file
const express = require('express');
const productsRepo = require('../repositories/products2');
const UserProductsIndexTemplate = require('../views/products/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await productsRepo.getAll();
    res.send(UserProductsIndexTemplate({ products }));
});


module.exports = router;

//localhost:3000