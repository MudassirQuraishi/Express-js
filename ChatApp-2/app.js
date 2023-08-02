const express= require('express');

const app = express();

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome!</h1>');
})

const port = 2000;
console.log(`Server running at ${port}`);
app.listen(port);