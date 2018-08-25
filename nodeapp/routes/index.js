var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/dosubmit', function(req, res, next) {
  var name = req.body.name; 
  var dob = req.body.dob;
  res.send('Name = '+ name + ', DOB = '+ dob);
});

module.exports = router;
