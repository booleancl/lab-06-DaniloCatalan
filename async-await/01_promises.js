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

 async function simpleAsyncAwait() {
  var promise = new Promise((resolve, reject) => {
    resolve({data: { message: 'success value'}})
  })
  
  try
  {
    const result = await promise 
    return result.data.message
  }
  catch(e){
    return e.data.message
  }
  
}

async function notSoSimpleAsyncAwait() {

  const fetch = (url) => 
     new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', (rd) => data = data + rd);
        res.on('end', () => resolve(data));
        res.on('error', reject);
      });
    });
  //  return fetch('https://www.boolean.cl/')
  //   .then(result => {
  //     return result.length;
  //   });
  try
  {
    let response = await fetch('https://www.boolean.cl/')
    return response.length
  }
  catch(error){
    return 0
  }
}

module.exports = {
  simplePromise,
  simpleAsyncAwait,
  notSoSimpleAsyncAwait
}
