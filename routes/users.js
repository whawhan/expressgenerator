var express = require('express');
var router = express.Router();
const User = require('../models').user

const sequelize = require('../models').sequelize
const alamat= require('../models').addresses
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// penulisan dengan function
// router.get('/', function (req, res, next) {
//   const result =  User.findAll();
//   .then(result=>{
//   res.json(result)
//   })
// });

// penulisan dengan async
router.get('/', async(req, res, next)=> {
  const result = await User.findAll();
  res.json(result);
});


// router.get('/', async(req, res, next)=> {
//   const tes = await User.findOne({
//     where:{
//       id:50
//     }
//   })
//   res.json(tes);
// });

// router.get('/', async(req, res, next)=> {
//   const [tes,meta] = await sequelize.query('select * from users where id=10');
//   res.json(tes);
// });


//untuk menangkap lemparan uri
// router.get('/:id', async(req, res, next)=> {
//   const [tes,meta] = await sequelize.query(`select * from users where id=${req.params.id}`);
//   res.json(tes);
// });


// router.get('/:id', async(req, res, next)=> {
//   const sql = `select * from users where id=${req.params.id}`
//   const [tes] = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT, raw:false})
//   res.json(tes)
// });

// untuk menampilkan banyak data pada object
// router.get('/', async(req, res, next)=> {
//   const result = `select * from users`
//   const [tes] = await sequelize.query(result)  
//   let a='';
//   for(let cek of tes){
//     // res.json(cek)
//     a += cek.name +'<br>'
//   }
//   res.send(a)
// });

// untuk menampilkan spesifik data pada object
// router.get('/:id', async(req, res, next)=> {
//   const result = `select * from users where id=${req.params.id}`
//   const [tes] = await sequelize.query(result)  
//   let a='';
//   for(let cek of tes){
//     // res.json(cek)
//     a += cek.name +'<br>'
//   }
//   res.send(a)
// });

// router.get('/:id', async(req, res, next)=> {
//   const result = await User.findAll();
//   res.json(result)
// });

//untuk menangkap lemparan uri
// router.get('/:id/:email', async(req, res, next)=> {
//   const sql = `select * from users where id=? or email=?`
//   const [result] = await sequelize.query(sql, {
//     type : sequelize.QueryTypes.SELECT,
//     raw:true,
//     replacements : [req.params.id, req.params.email]
//   })
//   res.json(result);
// });

// router.get('/:id/:email', async(req, res, next)=> {
//   const sql = `select * from users where id=? or email=?`
//   const result = await sequelize.query(sql, {
//     type : sequelize.QueryTypes.SELECT,
//     raw:false,
    
//     replacements : [req.params.id, req.params.email]
//   })
//   let a='';
//   for(let cek of result){
//     // res.json(cek)
//     a += cek.name +'<br>'
//   }
//   res.send(a)
// });

// router.get('/', async(req, res, next)=> {
//   const result = await User.findAll({
//     include: alamat
//   });
// });

module.exports = router;
