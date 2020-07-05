const axios = require('axios');

function xhr( url ) {
   var data;

   axios.get(url)
   .then(response => {
      console.log('success');
      data = response.data;
      // console.log(data);
      return data
   })
   .catch(err => {
      console.log(err);
      console.log('err')
   })

   return data;
}

 module.exports.xhr = xhr;