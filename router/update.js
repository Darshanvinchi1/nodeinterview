const express = require('express');
const connection = require('../mysql');


const router = express.Router();

router.get('/edit/product/:id',(req,res)=>{
    const id = req.params.id;

    connection.query(`SELECT * FROM product where id=${id}`,(err, row)=>{
        res.render('editprduct',{product:row[0]});
    })
})

router.get('/edit/category/:id',(req,res)=>{
    const id = req.params.id;

    connection.query(`SELECT * FROM category where id=${id}`,(err, row)=>{
        res.render('editcategory',{category:row[0]});
    })
})

router.post('/editproduct',(req,res)=>{
    const {ProductName,product_id} = req.body;
    connection.query(`UPDATE product SET product_name = '${ProductName}' WHERE id=${product_id}`,(err,resutl)=>{
        res.redirect(`/`)
    })
})

router.post('/category',(req,res)=>{
    const {CategoryName,CategoryId} = req.body;
    connection.query(`UPDATE category SET category_name = '${CategoryName}' WHERE id=${CategoryId}`,(err,resutl)=>{
        res.redirect(`/`)
    })
})

module.exports = router;