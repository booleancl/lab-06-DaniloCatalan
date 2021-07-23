const https = require('https');

function simplePromise(){
  var promise = new Promise(function (resolve, reject) {
    resolve({ data: { message: 'success value'}})
  })

  return promise
    .then((value) => {
      return value.data.message
    })
}

 function simpleAsyncAwait() {
  var promise = new Promise((resolve, reject) => {
    resolve({data: { message: 'success value'}})
  })
  
  const result = promise 
  return result.data.message
}

function notSoSimpleAsyncAwait() {

  const fetch = (url) => 
     new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', (rd) => data = data + rd);
        res.on('end', () => resolve(data));
        res.on('error', reject);
      });
    });
  

   return fetch('https://www.boolean.cl/')
    .then(result => {
      return result.length;
    });
}

module.exports = {
  simplePromise,
  simpleAsyncAwait,
  notSoSimpleAsyncAwait
}
