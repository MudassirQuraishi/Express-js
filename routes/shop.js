const express = require('express');

const router = express.Router();



const landingPageCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App</title>
</head>
<body>
    <h1>Welcome to Landing Page</h1>
    <form action="/shop" method="post"><a href="/admin/add-product">Add Product</a></form>
</body>
</html>`;

router.get('/',(req,res,next)=>{
    res.send(landingPageCode);
});

module.exports=router;
