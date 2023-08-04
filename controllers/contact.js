const path = require('path');

exports.getContact =(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views','contact.html'));
}

exports.postContact =(req,res,next)=>{
    console.log(req.body);
    res.redirect('/succeess');
}

exports.getMessage =(req,res,next)=>{
    res.sendFile(path.join(__dirname, '../','views','success.html'));
};

exports.postMessage = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
}