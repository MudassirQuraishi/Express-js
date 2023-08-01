const express = require('express');

const router = express.Router();

const addProductCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App</title>
</head>
<body>
    <form action="/admin/add-product" method="post">
        <input type="text" name="product-name" placeholder="Enter Product Name">
        <input type="number" name="product-size" placeholder="Enter Product Size">
        <button type="submit">Add product</button>
    </form>
    <form action="/shop/" method="get">
        <button type="submit">Go back</button>
    </form>
</body>
</html>`;


router.get('/add-product',(req,res,next)=>{
    res.send(addProductCode);
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/admin/add-product');
})

module.exports = router;