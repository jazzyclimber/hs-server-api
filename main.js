var express = require('express');
var axios = require('axios');
// var ajaxCall = require('./public/ajax.js');
var app = express()

//when server receives a GET request
app.get('/api', function(req, res) {
    console.log('GET request to server');

    axios.get('https://api.hubapi.com/content/api/v2/blog-posts?hapikey=<APIKEY>')
    .then(response => {
       console.log('success');
       // console.log(data);
       res.json(response.data)
    })
    .catch(err => {
       res.send('Error: ', err)
    })


})



app.listen(3000, () => {
   console.log('Server is running on port 3000');
})