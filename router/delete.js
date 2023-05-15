const express =  require('express');
const router = express.Router();
const connection =  require('../mysql');

router.get('/delete/category/:id',(req,res)=>{
    const id = req.params.id;
    connection.query(`DELETE FROM category WHERE id=${id}`,(err,row)=>{
        if(err) console.log(err);
        res.redirect('/');
    });
})

router.get('/delete/product/:id/:catId',(req,res)=>{
    const id = req.params.id;
    const catId =  req.params.catId;
    connection.query(`DELETE FROM product WHERE id=${id}`,(err,row)=>{
        if(err) console.log(err);
        res.redirect(`/product/${catId}`);
    });
})

module.exports = router;