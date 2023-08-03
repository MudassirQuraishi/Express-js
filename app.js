const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const bodyParser = require('body-parser')

const app =express();

app.use(bodyParser.urlencoded({ extended:false }));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','error404.html'))
})

const port = 2000;
console.log(`Serving at port ${port}`);
app.listen(port);