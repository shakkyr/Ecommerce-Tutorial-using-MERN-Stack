const Product = require('../models/Product');

exports.create = async (req, res) => {
    console.log('req.body', req.body);
    console.log('req.file', req.file);
    console.log('req.user', req.user);

    const {filename} = req.file;
    const {productName, productDesc, productPrice, productCategory, productQty } = req.body;
    
    try {
        let product = new Product()
        product.fileName = filename
    } catch (error) {
        log(error,'productController.create error')
    }
}