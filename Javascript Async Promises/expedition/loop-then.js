async function promiseFn(n) {
  let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(n + n)
    },3000)
  })
  return promise
}
function promiseInvoker(acceptPromiseFn) {
    acceptPromiseFn.then(data => {
      console.log(data - (data / 2))
      if( data <= 128){
        promiseInvoker(promiseFn(data))
      }
      return false
    })
}
promiseInvoker(promiseFn(1))
