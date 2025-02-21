/*
promises -> A promise is a special object that connects code that needs to produce a result and the code that needs to use this result in the next step.

- A Promise object represents an operation which has produced or will eventually produce a value. Promises provide a
robust way to wrap the (possibly pending) result of asynchronous work, mitigating the problem of deeply nested
callbacks (known as "callback hell").

promise syntax:

        let myPromise = new Promise(function(myResolve, myReject) {
        // "Producing Code" (May take some time)

        myResolve(); // when successful
        myReject();  // when error
        });

        // "Consuming Code" (Must wait for a fulfilled Promise)
        myPromise.then(
        function(value) { * code if successful *},
        function(error) { * code if some error * }
        );

- When we create a Promise, we give it a function. In the following example, we use a  convention that we have seen a lot; we are creating a function on the spot. So, inside the argument list we are defining the function, often done using arrow functions as well. This function needs two parameters, and these parameters are callbacks. We have called them resolve and reject here.
- You can call these parameters anything you want, but resolve or res and reject or rej are most common
- When resolve() is called, the Promise is presumed to be successful and whatever is between the arrows is returned and used as input for the then method on the  Promise object. If reject() is called, the Promise failed and the catch() method  on the Promise object (if present) is executed with the argument of the reject() function
*/

// Create a new Promise that takes a function with 'resolve' and 'reject' as parameters
let promise = new Promise(function (resolve, reject) { 
    let x = 20; // Define a variable x with the value 20

    // Check if x is greater than 10
    if (x > 10) { 
        resolve(x); // If true, resolve the promise with x
    } else {
        reject(x); // If false, reject the promise with x
    }
});

// Handle the resolved or rejected state of the promise
promise.then(
    function (value) { 
        console.log("Success: ", value); // Executes when the promise is resolved
    },
    function (error) { 
        console.log("Error: ", error); // Executes when the promise is rejected
    }
);

/*
- We first create a Promise. When creating a Promise, we don't know what the value of the Promise is going to be. This value is whatever is sent as an argument to the  resolve function. It is a sort of placeholder. So when we call then on the Promise, we basically say: figure out what the value  of the Promise is, and when you know, execute one function if the Promise was  resolved or a different function if it was rejected. When a Promise is neither resolved  nor rejected, we say that the Promise is pending
*/
