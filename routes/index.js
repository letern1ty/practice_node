const { query } = require('express');
var express = require('express');
const connection = require('../db/sql');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});


router.post('/api/login', function (req, res, next) {
  console.log(req.body)
  let username = req.body.username;
  let password = req.body.password;
  connection.query("SELECT * FROM users where name='username' , password='password'", function (err, res) {
    console.log(query,'query')
    console.log(err,'error',res,'results')
    res.send({
      title: 'Express',
      status: '200'
    });
  })
});
module.exports = router;