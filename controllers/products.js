const Product = require ('../models/product.js')
const path = require('path');

exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views','admin.html'));
};

exports.getPostProduct =(req,res,next)=>{
    const Product = new Product(req.body.title)
    console.log(Product);
    res.redirect('/admin/add-product');
};