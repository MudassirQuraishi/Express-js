
const path = require('path');

exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views','admin.html'));
};

exports.getPostProduct =(req,res,next)=>{
    console.log(req.body);
    res.redirect('/admin/add-product');
}