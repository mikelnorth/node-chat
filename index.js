var express = require('express')
var bodyParser = require('body-parser')
var messageController = require('./server/controllers/messages_controller')

var app = express();

app.use(bodyParser.json())
app.use( express.static('./public/build'))


var baseURL = '/api/messages/'

app.get(baseURL, messageController.read)

app.put(baseURL + ':id', messageController.update)

app.post(baseURL, messageController.create)

app.delete(baseURL + ':id', messageController.delete)



























app.listen(3000, function(){
    console.log("I hear you, always listening... port:3000")
})