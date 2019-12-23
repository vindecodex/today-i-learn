#### Async

`async` keyword is used to create a function that returns a promise, even if you return non-promise JavaScript will wrap it with promise automatically and status will be `resolve`.

```JavaScript
async function fn() {
  return 'Hello World';
}

fn();
```

>output

![image](https://user-images.githubusercontent.com/50949760/70291091-155cbb00-1815-11ea-8895-faafc474d57a.png)

async with reject

```JavaScript
async function fn() {
  return Promise.reject("sorry error")
}

fn().catch(err => console.log(err))
```

`await` keyword is similar with `then` method but `await` can only be used inside `async` function

```JavaScript
function printNames() {
  // i used o for resolve and x for reject to make it short
  return new Promise(function(o,x){
    setTimeout(function(){
      o({
        Names: [
        "John",
        "Doe"
      ]})
    },3000)
  })
}

async function f(){
  // it will wait until printNames gives a value to variable name before it runs the console.log
  const name = await printNames();
  console.log(name)
}
f()
// using .then
printNames().then(val => console.log(val))
```

#### Catching the error using async

Method 1

```JavaScript
async function f() {
    try {
        let response = await fetch('https://wrong-url-api')
        console.log(response)
    } catch(e) {
        console.log('error message: ' + e)
    }
}
```

Method 2

```JavaScript
async function f() {
    let response = await fetch('https://wrong-url-api')
    console.log(response)
}
f().catch(e => console.log('error message: ' + e))
```

#### Async in Parallel

We have two async functions which is `build1` and `build2` below of that are executors of the two async functions. First Executor is non-parallel and the other next were parallels. Just Uncomment the function you want to execute and uncomment the others to see the differences.

```JavaScript
/* Async Functions */
async function build1() {
  return new Promise(function(o,x){
    setTimeout(function(){
      console.log("build1")
      o("Build on 1")
    },3000)
  })
}
async function build2() {
  return new Promise(function(o,x){
    setTimeout(function(){
      console.log("build2")
      o("Build on 1")
      o("Build on 2")
    },3000)
  })
}

/* Executor */

/* Using non parallel */
async function build() {
  const b1 = await build1()
  const b2 = await build2()
  console.log(b1,b2)
}
//build()

/* Using parallel Method1 */
async function buildParallel1() {
  const b1 = build1()
  const b2 = build2()
  const B1 = await b1
  const B2 = await b2
  console.log(B1,B2)
}
//buildParallel1()

/* Method2 */
async function buildParallel2() {
  const b1 = build1()
  const b2 = build2()
  const[B1, B2] = [await b1, await b2]
  console.log(b1,b2)
}

//buildParallel2()
/* Method3 */
async function buildParallel3() {
  const b1 = build1()
  const b2 = build2()
  console.log(await b1, await b2)
}
//buildParallel3()
```
