function demoPromise() {
    return new Promise(function(resolve, reject) {
      let randomNumber = Math.floor(Math.random() * 10); 
        console.log(randomNumber)
      if (randomNumber >= 5) {
        resolve(true); 
      } else {
        reject(false); 
      }
    });
  }

  Promise.all([demoPromise(), demoPromise()])
  .then(function(results) {
    console.log(results); 
  })
  .catch(function(error) {
    console.log(error); 
  });