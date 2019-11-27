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

##### 3 status for Promise

Async Functions take some time before it returns a value, depends upon the data size that is being processed.

- Pending - holds undefined value
- Fulfilled - holds exact value
- Rejected - holds the error value
