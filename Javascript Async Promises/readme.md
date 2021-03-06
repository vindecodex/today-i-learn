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

Method 1 (using then at the last part argument must be undefined)

```JavaScript
const thePromise = new Promise(function(resolve,reject){
	reject("reject")
})
.then(undefined, err => { console.log(err) })
```

Method 2 (using the catch which is recommended)

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

from `then` we can also call another promises. By returning an async fn, same thing on what we did from below.

```JavaScript
sum(2,5)
.then(total => {
  console.log(total);
  return sum(7,7);
})
.then(anotherTotal => { console.log(anotherTotal) })
```

`.then` is a chain what may be the return of the promise or the then before it will be the next argument of your then.

#### Creating a Fn that accepts promise 

```JavaScript
function iAcceptPromise(anyPromise) {
  anyPromise.then(result => console.log(result));
}

const myPromise = new Promise(function(resolve, reject){
        resolve("Hello");
    });

iAcceptPromise(myPromise);
```

Passing a value that is not a promise to a fn that only accepts promise

```JavaScript
const val = "Hello World";
const convertedToPromise = Promise.resolve(val)  // Same thing with reject use Promise.reject(new Error("Erro"));
iAcceptPromise(convertedToPromise);
```

#### Parallel Promise with (Promise.all)

```JavaScript
const promise1 = new Promise(function(resolve,reject) {
    setTimeout(function(){ resolve("ONE"); }, 3000);
})
const promise2 = new Promise(function(resolve,reject) {
    setTimeout(function(){ resolve("TWO"); }, 5000);
})
const promise3 = new Promise(function(resolve,reject) {
    setTimeout(function(){ resolve("THREE"); }, 1000);
})
Promise.all([promise1,promise2,promise3]);
```

> Using above method is already executed upon declaring the `const promise#`

Or

```JavaScript
function promise1() {
    return new Promise(function(resolve,reject) {
        setTimeout(function() { resolve("ONE") }, 4000)
    })
}
function promise2() {
    return new Promise(function(resolve,reject) {
        setTimeout(function() { resolve("TWO") }, 7000)
    })
}
function promise3() {
    return new Promise(function(resolve,reject) {
        setTimeout(function() { resolve("THREE") }, 9000)
    })
}
Promise.all([promise1(),promise2(),promise3()])
```

> Using this method it will only be executed during the `Promise.all()` was called

Getting the value

```JavaScript
//if using function expression
Promise.all([promise1,promise2,promise3]).then(result => { console.log(result) })
//if using function declaration
Promise.all([promise1(),promise2(),promise3()]).then(result => { console.log(result) })
```

> You can see the differences if you test this line of code.

#### Handling Rejection with (Promise.all)

> Bad

```JavaScript
//if using function expression
Promise.all([promise1,promise2,promise3]).then(result => { console.log(result) })
//if using function declaration
Promise.all([promise1(),promise2(),promise3()]).then(result => { console.log(result) })
```

> If we add reject on any of the promises it won't show other promises results but instead the value of reject will be displayed.
> If you want to still display all the result even one of the promise rejected.

> Good

> Using code below is good practice

```JavaScript
//if using function expression
Promise.all([
  promise1.catch(err => { console.log(err) }),
  promise2.catch(err => { console.log(err) }),
  promise3.catch(err => { console.log(err) })
]).then(result => { console.log(result) })
//if using function declaration
Promise.all([
  promise1().catch(err => { console.log(err) }),
  promise2().catch(err => { console.log(err) }),
  promise3().catch(err => { console.log(err) })
]).then(result => { console.log(result) })
```

Promise.all is now rarely used on production.

#### Get the fastest result (Promise.race)

```JavaScript
function racer1() {
  return new Promise(function(resolve, reject) {
      setTimeout(function(){
              resolve("racer 1 win");
          },1500)
      })
}
function racer2() {
  return new Promise(function(resolve, reject) {
      setTimeout(function(){
              resolve("racer 2 win");
          }, 2000)
      })
}
function racer3() {
  return new Promise(function(resolve, reject) {
      setTimeout(function(){
              resolve("racer 3 win");
          }, 1000)
      })
}

Promise.race([racer1(),racer2(),racer3()]).then(winner => { console.log(winner) })
```

#### Good Thing About Promises is Chaining

Every function that returns a promise we can call a callback by using `.then`.

`.then`, `.catch` and `.finally` always returns a promise that is why after using `.then` we can still chain another `.then`

Every returned promise has a static and prototype methods

##### Prototype methods has 3 of them
- Promise.prototype.then(onResolved,onRejected) or Promise.then(onResoved,onRejected)

> Accepts a function resolved and rejected, resolved function that returns a value if resolved and rejected function that returns a reason why it was rejected.

`It is better to separate resolved and rejected, use .then for resolve only and .catch for rejected`

- Promise.prototype.catch(onRejected) or Promise.catch(onRejected)

> Accepts a function rejected that returns the reason why it was rejected.

- Promise.prototype.finally(onFinally) or Promise.prototype.finally(onFinally)

> Accepts a function that will return no matter if it was resolve or rejected.

##### Static methods has 4 of them

The first two of static methods were helpers. It helps you to create resolve and rejected value.

- Promise.resolve(value)

> returns a resolve value

- Promise.reject(value)

> return a reject value

The next two of static methods were used for dealing with multiple promise

- Promise.all(arrayOfPromises) or Promise.all([promise1,promise2])

> Runs a promise in parallel and return a value of all promises in exact order the way you put it on the array

`Always use .catch on each promises to avoid blocking the other promises from running`

- Promise.race(arrayOfPromises) or Promise.race([promise1,promise2])


***

#### Rules on using Promises from [Hackernoon](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)

1. Use promises whenever you are using async or blocking code.
2. resolve maps to then and reject maps to catch for all practical purposes.
3. Make sure to write both .catch and .then methods for all the promises.
4. If something needs to be done in both the cases use .finally
5. We only get one shot at mutating each promise.
6. We can add multiple handlers to a single promise.
7. The return type of all the methods in Promise object whether they are static methods or prototype methods is again a Promise
8. In Promise.all the order of the promises are maintained in values variable irrespective of which promise was first resolved.

[Continue to Async](/Javascript%20Async%20Promises/async.md)
