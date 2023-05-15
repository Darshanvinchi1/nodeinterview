const express =  require('express');
const router = express.Router();
const connection =  require('../mysql');

router.get('/',(req,res)=>{
    res.render('index');
})
router.get('/categories', (req,res) => {
    const LIMIT = 3;
    const OFFSET = req.query.page ? (req.query.page-1) * LIMIT : 0;
    let pagecount = req.query.page || 0;
    const sql = `SELECT COUNT(*) AS total FROM category`;
    connection.query(sql, (err, result) => {
       pagecount = Math.ceil(result[0].total / LIMIT);
    })
    connection.query(`SELECT * FROM category LIMIT ${LIMIT} OFFSET ${OFFSET}`,(err, row) =>{
        res.render('home',{categorys:row,pagecount:pagecount});
    })
    // console.log(pagecount);
})
router.get('/product/:id',(req,res) => {
    const { id } = req.params;
    const LIMIT = 3;
    const OFFSET = req.query.page ? (req.query.page-1) * LIMIT : 0;
    let pagecount = req.query.page || 0;
    const sql = `SELECT COUNT(*) AS total FROM product where category_id =${id}`;
    connection.query(sql, (err, result) => {
        pagecount = Math.ceil(result[0].total / LIMIT);
     })
    connection.query(`SELECT * from product inner join category on product.category_id = ${id} and category.id=${id} LIMIT ${LIMIT} OFFSET ${OFFSET}`,(err,row) =>{
        res.render('product',{products:row,pagecount:pagecount,id:id});
    })
})
router.get('/product',(req,res) => {
    const LIMIT = 3;
    const OFFSET = req.query.page ? (req.query.page-1) * LIMIT : 0;
    let pagecount = req.query.page || 0;
    const sql = `SELECT COUNT(*) AS total FROM product`;
    connection.query(sql, (err, result) => {
        pagecount = Math.ceil(result[0].total / LIMIT);
     })
    connection.query(`SELECT * from product inner join category on product.category_id = category.id LIMIT ${LIMIT} OFFSET ${OFFSET}`,(err,row) =>{
        res.render('product',{products:row,pagecount:pagecount});
    })
})
module.exports = router;