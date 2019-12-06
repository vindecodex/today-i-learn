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
