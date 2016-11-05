var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.cookie ('A',1);
  res.cookie ('B',2, {httpOnly : true });
  res.cookie ('C',3, {secure : true });
  res.cookie ('D',4);
  res.send('<html><head><title>CookieTester</title></head><body><script src="/cookiechecker.js"></script></body></html>')
})

app.use('/', express.static('public'))

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
