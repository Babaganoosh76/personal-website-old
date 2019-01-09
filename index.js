var express = require('express')
var app = express()

var port = 8000

app.use(express.static(__dirname + '/static'))
app.set('view engine', 'html')

app.get('/', function(req,res){
	res.render('index')
})

var server = app.listen(port, function(){
	console.log('Server running on port ' + port)
})