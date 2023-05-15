const express = require('express');
const connection = require('../mysql');

const router = express.Router();

router.get('/addCategory', (req,res) =>{
    res.render('addcategory')
})

router.get('/addproduct',(req,res)=>{
    res.render('addproduct')
})

router.post('/insert/product',(req,res)=>{
    const { ProductName, CategoryId } =  req.body;

    connection.query(`SELECT * FROM category where Id =${CategoryId}`,(err,result) =>{
        if(err) res.send('<h1>Category Id not found</h1>')
        connection.query(`INSERT INTO product (product_name,category_id) VALUES ('${ProductName}',${CategoryId})`,(err, row)=>{
            if(err) console.log(err)
            res.redirect(`/product/${CategoryId}`)
        })
    })
})

router.post('/insertcategory',(req,res)=>{
    const { CategoryName } = req.body;
    // console.log(CategoryName);
    connection.query(`INSERT INTO category (category_name) VALUES ('${CategoryName}')`,(err,row) =>{
        res.redirect('/');
    })
})

module.exports = router;