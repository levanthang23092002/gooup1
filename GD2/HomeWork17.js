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
 const promises = Array.from({ length: 20 }).map(demoPromise);

// Promise.all(promises)
//   .then((results) => {
//     console.log("Promise.all results:", results);
//   })
//   .catch((error) => {
//     console.error("Promise.all error:", error);
//   });


(async function() {
    let i = 0;
  for (const promise of promises) {

    try {
      const result = await promise;
      console.log("result ", i , result);
    } catch (error) {
      console.error("result ", i , error);
    }
    i++;
  }
})().catch((error) => {
  console.error("Top-level error:", error);
});