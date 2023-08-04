const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoute = require('./routes/contact');
const successRoute = require('./routes/success');
const errorController=require('./controllers/error');
const path = require('path');

const bodyParser = require('body-parser')

const app =express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contact-us',contactRoute);
app.use('/success',successRoute)
app.use(errorController.getError404)

const port = 2000;
console.log(`Serving at port ${port}`);
app.listen(port);