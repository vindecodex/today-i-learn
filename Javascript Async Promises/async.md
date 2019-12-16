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
