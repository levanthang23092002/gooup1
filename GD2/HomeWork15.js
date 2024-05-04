function demoPromise(delaySecond) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let randomNumber = Math.floor(Math.random() * 10);
        console.log(randomNumber);
        if (randomNumber >= 5) {
          resolve(true);
        } else {
          reject(false);
        }
      }, delaySecond * 1000);
    });
  }
  
  Promise.allSettled([demoPromise(2), demoPromise(4)])
    .then(function(results) {
      results.forEach(function(result) {
        if (result.status === "fulfilled") {
          console.log("Resolved: " + result.value);
        } else if (result.status === "rejected") {
          console.log("Rejected: " + result.reason);
        }
      });
    });

  // Promise.all([demoPromise(2), demoPromise(4)])
  // .then(function(results) {
  //   console.log(results); 
  // })
  // .catch(function(error) {
  //   console.log(error); 
  // });