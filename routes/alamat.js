var express = require('express');
var router = express.Router();
const Alamat = require('../models').addresses

const sequelize = require('../models').sequelize

/* GET users listing. */
// router.get('/', async(req, res, next)=> {
//   const result = await Alamat.findAll();
//   res.json(result)
// });

router.get('/', async(req, res, next)=> {
    const sql = `select * from addresses`
    const tes = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT, raw:false})
    res.json(tes)
  });

router.post('/', async(req, res, next)=>{
  const sql = `INSERT INTO addresses (city, country, email,created_at, updated_at) values (?,?,?,?,?) RETURNING *`;
  const [[result]] = await sequelize.query(sql, {
    replacements :[
      req.body.city,
      req.body.country,
      req.body.email,
      new Date(),
      new Date()
    ],type: sequelize.QueryTypes.INSERT      
  })
  console.log(result);
  res.json(sql)
  
  

console.log(req.body)
  const input = await Alamat.create({
    city : req.body.city,
    country : req.body.country,
    email : req.body.email,
    created_at : new Date,
    updated_at : new Date,
    // street: bcrypt.hashSync(req.body.password)
  })
  res.json(input)

})

module.exports = router;