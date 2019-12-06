#### Async

`async` keyword is used to create a function that returns a promise, even if you return non-promise JavaScript will wrap it with promise automatically and status will be `resolve`.

```JavaScript
async function fn() {
  return 'Hello World';
}

fn();
```
