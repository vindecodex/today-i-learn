### JavaScript Aysnc Await and Promises

What is Synchronous - it executes a function one at a time
> Synchronous has a `blocking call` which means it blocks the next function until the other function has not finished running.

What is Asynchronous - it executes multiple task at a time without waiting to finish the other function
> Asynchronous has a `non blocking call` which means all function can run even someone(fn) is running.

examples of Async fn are:
- settimeout
- http request
- reading data from files
- interacting db
- etc

> If the code contains sync and async, browser let all the sync functions finished first and then a callback function of async runs after all.

> Note that not only the async can have a callback but also the sync fn.

What is a callback - it is a function that pass as an argument.

#### 3 status for Promise

Async Functions take some time before it returns a value, depends upon the data size that is being processed.

- Pending - holds undefined value
- Fulfilled - holds exact value
- Rejected - holds the error value

#### Creating a Promise

To create a promise we are going to instantiate a new class which is `Promise` class. And Promise has a parameter which is a function that is called as executor and this is required.
This executor function has also two parameters which is `resolve` and `reject` and both of these are functions as well.

1. Pending

```JavaScript
const thePromise = new Promise(function(resolve,reject){
	
})
console.log(thePromise)
```

output:

![image](https://user-images.githubusercontent.com/50949760/69840426-71b05f80-1296-11ea-974c-9fcba37c09f5.png)

2. Resolved

```JavaScript
const thePromise = new Promise(function(resolve,reject){
  // resolve accepts one argument which will be the value
	resolve("resolve")
})
console.log(thePromise)
```

output:

![image](https://user-images.githubusercontent.com/50949760/69840535-eaafb700-1296-11ea-8211-e972bdb4bbb6.png)

3. Rejected

```JavaScript
const thePromise = new Promise(function(resolve,reject){
  // reject accepts one argument which will be the value of error or reason why it was rejected
	reject("reject")
})
console.log(thePromise)
```

output:

![image](https://user-images.githubusercontent.com/50949760/69840705-6b6eb300-1297-11ea-8ac4-97dd0043137a.png)

#### Getting the value of a promise either rejected or resolved

##### Getting the output when resolved

We can access promise value by using the `then`. `then` accepts two arguments which is a function the `onfulfilled` and `onrejected`

```JavaScript
const thePromise = new Promise(function(resolve, reject){
    resolve("myvalue");
    })

thePromise.then(function(value){ return value })

// or

thePromise.then(value => return value)

// We can add comma and add another function for the onrejected part example below

thePromise.then(resolveVal => console.log(resolveVal), rejectVal => console.log(rejectVal))

```

##### Catching the error when rejecting

```JavaScript
const thePromise = new Promise(function(resolve,reject){
	reject("reject")
}).catch(err => console.log(err))
```

It will output whatever the value of your reject

#### Using Promise on custom function

```JavaScript
function sum(n1, n2) {
  const promise = new Promise(function(resolve, reject){
      setTimeout(function(){
          if (typeof n1 != "number" || typeof n2 != "number") {
              return reject("Required input type of number");
          }
          const result= n1 + n2;
          resolve("Sum of two numbers: " + result)
          }, 3000);
      });
  return promise;
}

sum(2,5)
.then(total => {console.log(total)});
// output should be 7;
```
