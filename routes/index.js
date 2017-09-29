var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NumberGeneratorApp' });
});

router.get('/unittest', function(req, res, next) {
  res.render('unittest', { title: 'NumberGeneratorApp' });
});
module.exports = router;
