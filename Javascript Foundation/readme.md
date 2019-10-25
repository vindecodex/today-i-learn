<div class="wrapper">

<div class="box">

<div class="heading"><span class="date">April 06, 2019</span>

###### Day 1

</div>

**Logical Operators** using this method

<pre>                var a = 100;
                console.log(a > 70 ? 'yes' : 'no');

                output:
                yes

                <span class="comment">// try to paste on console to see and try to experiment on it
                    you can use it for variables something like this</span> 

                var grade = 60;
                var isFail = grade < 75 ? 'fail' : 'Passed';
                console.log(isFail);

                output:
                fail
            </pre>

Another ideas

<pre>                console.log(true && false);

                output
                false

                console.log(true && true);

                output
                true

                console.log(true || true);

                output
                true

                console.log(true || false);

                output
                true

                <span class="comment">// you can use this as functions that returns a boolean type
                    to help shorten your code</span> 
            </pre>

Other ways to console a value

<pre>                var name = 'vindecode';
                var age = 22;
                console.log('Hi im %s and I am %s year\'s old', name, age);

                output:
                Hi im vindecode and I am 22 year's old
            </pre>

Small letters is always greater than Capital letters and all letters are greater than special characters

<pre>                console.log('a' > 'A');

                output:
                true

                console.log('a' < 'A');

                output:
                false

                console.log('a' > '@' && 'A' > '@');

                output:
                true

                console.log('a' < '@' && 'A' < '@');

                output:
                false
            </pre>

The undefined and the null are equal

<pre>                console.log(null == undefined);

                output:
                true
            </pre>

Zero and false are also equal

<pre>                console.log(0 == false);

                output:
                true

                <span class="comment">// so you can use 1 or 0 as your true or false comparison</span> 
            </pre>

</div>

<div class="box">

<div class="heading"><span class="date">April 07, 2019</span>

###### Day 2

</div>

**While loops** is a loop that will always execute untill the condition is not true

<pre>                    let result = 1; 
                    let counter = 0; 
                    while (counter < 10) { 
                        result = result * 2; 
                        counter = counter + 1; 
                    } 
                    console.log(result); 

                    output:
                    1024

                    <span class="comment">// No explanation just a syntax</span>
            </pre>

**Do While loops** is a loop that execute first before doing the condition

<pre>                    let sayYes;
                     do { 
                         sayYes = prompt("Please say yes or else i will ask again"); 
                        } 
                        while (sayYes.toLowerCase() != "yes"); 
                        console.log(sayYes);

                        output:
                        yes

                        <span class="comment">// I use .toLowerCase() method to allow key sensitivity</span>
            </pre>

**For loop** with break;

<pre>                    for (let current = 20; ; current = current + 1) { 
                        if (current % 7 == 0) { 
                            console.log(current); 
                            break; 
                        } 
                    } 

                    output:
                    21

                    <span class="comment">// We can use this style for infinite loops (looks like while loops never stop until it true the condition)</span>
            </pre>

shortcuts for adding, subtracting, multiply, device by itself

<pre>                a+=1;
                a-=1;
                a*=2;
                a/=5;

                a++;<span class="comment">// multiply and devide will not work on this</span>
                a--;<span class="comment">// multiply and devide will not work on this</span>

            </pre>

**Switch syntax**

<pre>                    switch (prompt("What is the weather like?")) {
                         case "rainy": 
                         console.log("Remember to bring an umbrella."); 
                         break; case "sunny": 
                         console.log("Dress lightly."); 
                         case "cloudy": console.log("Go outside."); 
                         break; 
                         default: 
                         console.log("Unknown weather type!"); 
                         break; 
                        }
            </pre>

</div>

<div class="box day">

<div class="heading"><span class="date">April 09, 2019</span>

###### Day 3

</div>

**Regular Expression**

You can get each letter of a string by doing this

<pre>            var name = "John Doe";
            name[1];

            output:
            o
            <span class="comment">// you can use loop to get each of the letters</span>
            </pre>

**Functions** You can pass a function to a variable

<pre>                var addNumbers = function(n1 ,n2) {
                    console.log(n1 + n2) ;
                   }

                   addNumbers(5,10);

                   output:
                   15

                   <span class="comment">
                       // Its just semilar with
                       // function addNumbers(n1,n2){
                       // console.log(n1 + n2);
                       // }
                       // RIGHT?!!!</span>

                   <span class="comment">// You can also do this</span>

                       function addNum(n1,n2){
                           console.log(n1 + n2);
                       }

                       var x = addNum;

                       x(10,10);

                       output:
                       20
            </pre>

</div>

<div class="box day">

<div class="heading"><span class="date">April 12, 2019</span>

###### Day 4

</div>

**Regular Expression Continued**

Checking a string if it contains specific words using the test method

<pre>                var matches = /decode/;
                var yourText = "His name is Vindecode";
                var result = matches.test(yourText); <span class="comment">// test method only returns true or false</span>
                console.log(result);

                output:
                true
                </pre>

Other dynamic way is this:

<pre>                    var matches = "vindecode";
                    var somethingMatches = new RegExp(matches); <span class="comment">// creates a new instance of RegExp</span>
                    var yourText = "he is vinddd";
                    var result = somethingMatches.test(yourText);
                    console.log(result);

                    output:
                    false

                    var yourText2 = "he is vindecode";
                    var result2 = somethingMatches.test(yourText2);
                    console.log(result2);

                    output:
                    true
                </pre>

For keys insensitive you just need to add i

<pre>                var matches = /decode/;
                var yourText = "His name is VinDECODE";
                var result = matches.test(yourText);
                console.log(result);

                output:
                false

                var matchesInsensitive = /decode/i; <span class="comment">// this is the syntax for key insensitive</span>
                var yourText = "His name is VinDECODE";
                var result = matchesInsensitive.test(yourText);
                console.log(result);

                output:
                true

                <span class="comment">// Using RegExp</span>
                var matchesInsensitive = new RegExp("decode", "i"); <span class="comment">// first param is the word you want to  match the second is the i for insetivity</span>
                var yourText = "His name is VinDECODE";
                var result = matchesInsensitive.test(yourText);
                console.log(result);

                output:
                true
                </pre>

</div>

<div class="box day">

<div class="heading"><span class="date">April 20, 2019</span>

###### Day 5

</div>

**Javascript Engine** is a program used to translate javascript into machine code

each browser has its own javascript engine.

Chrome has **V8** which is created by google

Firefox has a **spidermonkey** which is created by the creator of the javascript

**ECMAScript** is the one who Govern javascript engines so that, if someone creates an engine ECMAScript gives us the standard on how javascript works on each engine they created

**V8** was created by google because they want their google maps, and other application runs faster as a top 1 search engine.

And now **V8** was now a common javascript engine used, specialy to their chrome browser

How **Javascript** was executed ?

By the use of javascript engines, a javascript file will be read by the use of Compiler or Interpreter so that it will be understand by a machine language

**Compiler** vs **Interpreter** ?

**Interpreter** reads the code line by line and gives the instruction to the cpu.

**Compiler** converts the code into another code that the machine can understand

**Interpreter** is fast because it will not consume time to convert the code and sends directly to the cpu.

**Compiler** is also fast because it enhanced the code into a better one

<pre>                    <span class="comment">// if using a compiler this code will be simplified</span>
                    <span class="comment">// JS CODE</span>
                    function sum(){
                        for (var i = 0; i < 10; i ++){
                            return 5+10;
                        }
                    }

                    <span class="comment">// compiler will simplified this code as its just doing the same thing</span>
                    <span class="comment">// Compiler</span>
                    function(){
                        return 15;
                    }

                    <span class="comment">// this is how compiler works</span>
                    </pre>

**Google** decides to combine them and that is **v8** engine and the name of the compiler inside the **v8** is **JIT Compiler** or **Just In Time Compiler**

How **v8** works: first it reads the code line by line which is the job of an **interpreter** and their is a **profiler** that checks if their are repeating codes, if their is then it will be passed to a **compiler**.

**Call Stack** and **Memory Heap**

**Call Stack** is the memory of each function or variables will be stored its logic is First In Last Out (FILO)

Example

<pre>                        function a(num){
                            return num * num;
                        }

                        function b(num){
                            <span class="comment">// debugger; we add this code so that we can set breakpoint to developer tools</span>
                            return a(num) + 2;
                        }

                        b(5);

                        output:
                        27

                        <span class="comment">// uncomment the debugger and go to mozilla or chrome debuger.</span>
                    </pre>

You will see a **Call Stack** at the right pane and you can see the the function b was taken

and pressing the next step or step in for firefox you can see that each line was read and when it reads the function a we can see the a is added at the call stack but after it runs to that function it will be removed at the call stack, remember the FILO just play with it to understand more.

**Stack Overflow** when calling a function by it self it will run out of memory because calling it self will loop and cause damage

<pre>                        function a(){
                            return a();
                        }
                    </pre>

**Memory Heap** is the memory of each values will be stored

**Memory Leak** this will happen when cpu dont have space to put other values example

<pre>                        var a = [];
                        for (i = 10; i > 1; i++){
                            a[i] = i;
                        }
                    </pre>

To avoid memory leaks

*   Avoid Global variables
*   Adding EventListener because your decalring variable to an element and decalring EventListener again:

    <pre>                        var element = document.getElementById('element');
                            element.addEventListener('click', myfunction);
                        </pre>

*   using setInterval function must be stop if not using

Remember that memory is limited so always be aware about **Call Stack** and **Memory Heap**

</div>

<div class="box day">

<div class="heading"><span class="date">April 21, 2019</span>

###### Day 6

</div>

**Javascript** is a **Single Threaded** which means javascript runs a task once at a time

So dont think **Javascript is shit!.**. Let me explain something more about **Javascript**.

But first I want to prove it first that **javascript** is a single threaded language by doing this:

<pre>                        <span class="comment">// create html document with only just a button with a height of 200vh unit</span>
                        <span class="comment">// and add a javascript below with alert('any text'); or just run a javascript on a console of that page with alert</span>
                        <span class="comment">//try to run but dont even try to press ok on alert and try to click the button on your html or try to scroll down.</span>
                        <span class="comment">// you'll see that button couldnt be clicked nor scroll because as what i said javascript cant run multiple task unless the first task is done then before going to other task.</span>
                        </pre>

So dont think **javascript** is shit!...because there is a **Javascript Runtime** which the browser's offer to us

Javascript is synchronous becuase it runs one at a time.

**Javascript Runtime** is a built on browser that runs on a background while javascript is executing something

**Javascript Runtime** has also a WEB API, which comes from all browser (Chrome, Firefox, Opera, etc...)

Example of WEB API are:

*   DOM
*   fetch() for getting http request
*   setTimeOut()
*   setInterval()

so these are the WEB API which the **Javascript Runtime gives us.**

For more API try to go to console and type **window** all of them are WEB API

**WEB API** are asynchronous it runs a task at the background while javascript is running

**Remember** this that all WEB API is not a javascript it is written in c++ which we can get from the browser to help javascript run without waiting for the other task

If javascript found a function **setTimeOut()** javascript will pass it to the WEB API to process it and javascript continue to run what is really for him. when javascript finished running all the task, WEB API will tell to javascript engine if they can now pass the result that which he did.

Other explanation, javascript will check all the codes and if their is a WEB API then it will passed to WEB API and WEB API will process it, even though WEB API finished processing it, it will still wait to the javascript if it was finished all of its task before javascript reads the WEB API task.

Common Interview about javascript is that they will ask you a question with a code something like this

<pre>                            console.log('1');
                            setTimeout(() => {console.log('2'),1000}); <span class="comment">//this is a WEB API</span>
                            console.log('3');

                            output:
                            1
                            3
                            2
                        </pre>

As you can see javascript runs first everything before it runs the WEB API

Even though WEB API finished first it will wait to the **Stack Que** and **Event loop** will be the one to ask to the javascript engine if javascript is already done running and pass the what ever on the Stack Que.

**Node.js** vs **Javascript Runtime** both of them are runtime but only difference is that node.js can run without a browser, while Javascript Runtime cant run without a browser

**Conclusions**

**JavaScript** is like a musical notes or the codes

**Javascript Engine** is the musician or composer that can read/understand the notes

**Javascript Runtime** is the whole package it can create a note and can read the notes

Each function that is called on javascript is what they called as **Execution Context**.

Before adding an Execution Context or your function to the **Call Stack** we have a **global() Execution Context** which we can't see on the **Call Stack** but its in there we cant just see it. that global is created by the **javascript engine**

The **Global Execution Context** will create a 2 things which is **Global Object** and the **this** keyword

**Global Object** is <u>window</u> try to type on console, window

</div>

<div class="box day">

<div class="heading"><span class="date">April 27, 2019</span>

###### Day 7

</div>

**Execution Context** is a name of a function that will be added on the Call Stack

When we run a function the **Javascript Engine** will create an **Execution Context** and add it to the **Call Stack.**

The **Global Execution Context** is the first or something like a wrapper or the parent of the functions that you have created

After all the functions done executing the **Global Execution Context** will be the last will be pop off to the **Call Stack**

Remember that the very first thing inside a **Call Stack** is the **Global Execution Context**

**Lexical Environment** is about where does the function was executed.

<pre>                            <span class="comment">// Example</span>
                            function a(){ <span class="comment">// this is lexical to global execution context</span>
                                return 'planet A';
                            }

                            function b() { <span class="comment">// this is lexical to global execution context</span>
                                function c(){ <span class="comment">// this is lexical to b execution context</span>
                                return 'planet B'; 
                                }
                            }
                            <span class="comment">// did you get what  i mean ? lexical is about where the code was executed.</span>
                            </pre>

Remember that Lexical is about where to code was written, while scope is who can access the variable

Once the javascript runs it creates an execution context which is the global execution context

Everytime we run a function it creates an execution context which will be added to our call stack, and the call stack will help us find the lexical of each codes.

When a javascript runs there is a **Creation Phase** and an **Execution Phase**

In which during the **Create Phase** there is the creation of the **Global Execution Context** and the **This** object. after the creation of this two objects, their is also a **Hoisting**

Remember when I say environment it is the execution context/function

**Hoisting**is assigning all the variables or functions to undefined during Creation Phase reason for this is to allocate memory to the CPU before it runs the program

It checks all the variables and functions that you have on your code and assigned it to undefined

<pre>                                console.log(a);
                                var a = 'abc';
                                function b(){
                                    return 'ddd';
                                }

                                output:
                                undefined

                                <span class="comment">// the code above will be hoisted on creation phase, below code will show you how hoisted happen</span>

                                var a = undefined <span class="comment">// we can't see this but this will happen because of hoisting</span>
                                var b = undefine <span class="comment">// this is the function that being hoisted</span>
                                <span class="comment">// above are the hoisting process, remember about the creation phase it reads all the variables and function to be equal to undefined reason for memory allocation</span>

                                console.log(a); <span class="comment">// doing this on other language will cause an error because of calling it before declaring a variable, but because of hoisting it will not cause an error</span>
                                var a = 'abc';
                                function b(){
                                    return 'ddd';
                                }

                                output:
                                undefined <span class="comment">//this undefined is the value of a</span>
                            </pre>

Remember this every execution context, hoisting will always happen inside the environment/function/execution context

To avoid hoisting use **const and let**

But using let and const key word for declaring a variable may cause error if calling a variable before it was declared not same with var because var can be hoisted.

Main thing about **hoisting** is that it allocates memory to the cpu before javascript runs to make javascript ready.

Another idea found

<pre>                                <span class="comment">// this is a function expression</span>
                                var a = function(){
                                    return 'abc';
                                }

                                <span class="comment">// Other ways for function expression</span>
                                var a = () => {
                                    return 'abc';
                                }

                                <span class="comment">// this is a function declaration</span>
                                function a(){
                                    return 'abc';
                                }

                                <span class="comment">// when you call a function its name is Invocation/Call/Execution</span>
                            </pre>

<pre>                                <span class="comment">// other ways to return a value</span>
                                function person(person1, person2){
                                    return `${person1} : ${person2}`;
                                }
                            </pre>

At the Global Execution Context we have the global and this objects while on the execution context/ function we created, during the creation phase there are two objects will be created which will be the **this and arguments**

<pre>                                function person(person1, person2){
                                    console.log(arguments);
                                }

                                output:
                                Arguments {0: 'person1 value' , 1: 'person2 value'}

                                <span class="comment">// but never use this arguments it may cause trouble later because its not returning an array. but instead use this techniques below</span>

                                function person(person1, person2){
                                    console.log(Array.from(arguments))
                                }

                                output:
                                Array [person1 , person2]

                                <span class="comment">// these are some other ways</span>
                                function person(...args){ <span class="comment">// this is a spread operator you can change args what ever you want</span>
                                    console.log(Array.from(arguments));
                                    return `He is ${args[0]} and He is ${args[1]}`;
                                }

                                output:
                                Array [value 1, value2]
                                He is value1 and He is value2
                                <span class="comment">// remember that when using a return with this ${} technique use this ` because it will not work on simple qoute</span>
                            </pre>

<pre>                                <span class="comment">// Experiment about the spread operators</span>
                                function alphabet(...letters){
                                var l = Array.from(letters);
                                var n = l.length;
                                for (var i = 0; i < n; i++){
                                console.log(`This is letter : ${l[i]}`); 
                                }
                                }

                                <span class="comment">// Good thing about spread operators can add multiple arguments</span>
                                alphabet('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',);

                                output:
                                This is letter : a
                                This is letter : b
                                This is letter : c
                                This is letter : d
                                This is letter : e
                                This is letter : f
                                This is letter : g
                                This is letter : h
                                This is letter : i
                                This is letter : j
                                This is letter : k
                                This is letter : l
                                This is letter : m
                                This is letter : n
                                This is letter : o
                                This is letter : p
                                This is letter : q
                                This is letter : r
                                This is letter : s
                                This is letter : t
                                This is letter : u
                                This is letter : v
                                This is letter : w
                                This is letter : x
                                This is letter : y
                                This is letter : z
                            </pre>

A function without a paramater will still have an arguments but it will be empty object

<pre>                                function person(){
                                    console.log(arguments);
                                }

                                output:
                                {}
                            </pre>

**Variable Environment** each execution context/function has its own variable environment

**Scope Chain** which you can access variables from parents

<pre>                                function a(){
                                    var a = 'a'; <span class="comment">a can access variable of the global execution context</span>
                                    function b(){
                                        var b = 'b'; <span class="comment"> b can access variable of a</span>
                                        function c(){
                                            var c = 'c'; <span class="comment">// c can access variable of b and a</span>
                                        }
                                    }
                                }
                                <span class="comment">// this will be the chain global() -> a() -> b() -> c()</span>
                            </pre>

Another thing during the execution context we also have a **lexical variables** in which javascript will create a scope of each variable in which where will be the variables can be used/ or who can access variables

Another idea here

<pre>                                function a() {
                                    height = 50;
                                    return height;
                                }

                                output:
                                50

                                <span class="comment">// its working but to avoid this thing you can do this</span>

                                'use strict'
                                function a() {
                                    height = 50;
                                    return height;
                                }

                                output:
                                error
                            </pre>

**Function Scope VS Block Scope** Function scope creates variable on its enviroment and all child functions can access it. while Block Scope Every time there is a {} every variable that is inside of it cannot be access from the outside of the {}.

Most of the programming language are Block Scope but javascript isn't

<pre>                                if( 5 < 10){ <span class="comment">//this is already a block scope but javascript can still able to console the var number</span>
                                var number = 100;
                                }
                                console.log(number)

                                output:
                                100;
                            </pre>

To allow javascript Block Scoping we can use let and const declarations

<pre>                                if(5 < 10){
                                    const number = 100;
                                }
                                console.log(number);

                                output:
                                error

                                if(5 < 10){
                                    let number = 100;
                                }
                                console.log(number);

                                output:
                                error
                            </pre>

let and const are still in the memory but only the engine will keep not to use it if its already outside of the brackets

Remember the global variables are bad because it may cause memory leaks or variable colision or overides the value

To minimize global variables issue we have this modern technique **IIFE (Imediately Invoke Function Expression)**

<pre>                                (function(){ <span class="comment">//we create a function expression not a declaration, then create anonymous  
 function which has no name after the function we Invoke it directly by calling ()</span>

                                })();
                            </pre>

**This** the this keyword definition is "This is the object that the function is a property of"

<pre>                                    var person = {
                                        name : 'Vincent',
                                        talent : 'Sing',
                                        sing : function() {
                                        return 'ohhh lalala ' + this.name <span class="comment">// because we cannot access person.name   
 we can try to call it by using this, this.name = person.name</span>
                                        }
                                        }

                                        <span class="comment">// some short ways just compare the codes</span>

                                        var person = {
                                            name : 'Vincent',
                                            talent : 'Sing',
                                            sing() {
                                            return 'ohhh lalala ' + this.name <span class="comment">// because we cannot access person.name   
 we can try to call it by using this, this.name = person.name</span>
                                            }
                                            }
                            </pre>

</div>

<div class="box day">

<div class="heading"><span class="date">April 28, 2019</span>

###### Day 8

</div>

**The main pupose of <u>this</u>** is that it gives methods access to their object

The second purpose will be it execute same code for multiple objects

<pre>                                    var name = "vindecode" <span class="comment">// default name and this is in the global execution context (we must use const here but its not working for this time i created this)   
</span>

                                    function winner() {
                                    return 'The winner is ' + this.name;
                                    }

                                    const obj1 = {
                                    name : 'vindecodex',
                                    winner : winner
                                    }

                                    const obj2 = {
                                    name : 'vincent',
                                    winner : winner
                                    }

                                    winner(); <span class="comment">// remember to run this 1 by 1</span>
                                    obj1.winner(); <span class="comment">// remember to run this 1 by 1</span>
                                    obj2.winner();<span class="comment">// remember to run this 1 by 1</span>
                                <span class="comment">// by this example you will get more understanding on how this works</span>
                                </pre>

As you can see, we created one function but multiple objects can use that function, hope that you get what I mean

More idea, always think that <u>this</u> is a word "Who Called Me" because this is a placeholder depends on who called the this keyword.

Another idea here

<pre>                                    const a = {
                                        name : 'Vindecode',
                                        winner : function() {
                                            console.log('a' , this);
                                            var anotherFunc = function() {
                                                console.log('b' , this);
                                            }
                                            anotherFunc();
                                        }
                                    }

                                    a.winner()

                                    output:
                                    a Object { name : "Vindecode", winner : winner() }
                                    b Window <span class="comment">// why its not returning the object of a ?</span>

                                    <span class="comment">//This is a common error and to solve this we use the arrow function on es6</span>

                                    const a = {
                                        name: 'Vindecode',
                                        winner : function(){
                                            console.log('a', this);
                                            var anotherFunc = () => { <span class="comment">// by using this it lexically bind this, it checks what objects soround this</span>
                                                console.log('b' , this);
                                            }
                                            anotherFunc();
                                        }
                                    }

                                    a.winner()

                                    output:
                                    <span class="comment">// b now is returning object of a</span>
                                    a Object { name : "Vindecode", winner : winner() }
                                    b Object { name : "Vindecode", winner : winner() }

                                    <span class="comment">//But before the es6 this is how it is solved</span>

                                    const a = {
                                        name : 'Vindecode',
                                        winner : function() {
                                            console.log('a' , this);
                                            var anotherFunc = function() {
                                                console.log('b' , this);
                                            }
                                            return anotherFunc.bind(this);<span class="comment">// the this here refers to the a object</span>
                                        }
                                    }

                                    a.winner()() <span class="comment">//we run the function two times</span>

                                    output:
                                    a Object { name : "Vindecode", winner : winner() }
                                    b Object { name : "Vindecode", winner : winner() }

                                    <span class="comment">// One more thing to solve this problem</span>

                                    const a = {
                                        name: 'Vindecode',
                                        winner: function() {
                                            console.log('a' , this);
                                            var self = this; <span class="comment">// we use this to referrence to this object a</span>
                                            var anotherFunc = function() {
                                                console.log('b', self);
                                            }
                                            return anotherFunc()
                                        }
                                    }

                                    a.winner()

                                    output:
                                    a Object { name : "Vindecode", winner : winner() }
                                    b Object { name : "Vindecode", winner : winner() }
                                </pre>

I know its hard for me to explain how really <u>this</u> works, but its better to play with it because experience is the best part of learning, you will just understand its nature by always using it.

**The call(), apply() and bind()**

Call and Apply are just more likely similar but the only differences is that apply accepts array of parameter.

<pre>                                    const wizard = {
                                        name: 'Chen',
                                        health: 100,
                                        heal : function(){
                                            this.health = 100;
                                        }
                                    }

                                    const archer = {
                                        name: 'Trax',
                                        health: 30
                                    }
                                    <span class="comment">// the goal here is that how can we borrow the heal function of the wizard object without copying the heal function to our code.</span>
                                    <span class="comment">// this is were the call() function works</span>

                                    wizard.heal.call(archer); <span class="comment">// the first parameter on call is the object archer</span>
                                    archer;

                                    output:
                                    Object { name: "Trax", health: 100 } <span class="comment">// as you can see archer health now is 100</span>

                                    <span class="comment">//if heal function has a parameter this is how it will be call()</span>

                                    const wizard = {
                                        name: 'Chen',
                                        health: 100,
                                        heal : function(num1, num2){
                                            this.health += num1 + num2 ;
                                        }
                                    }

                                    const archer = {
                                        name: 'Trax',
                                        health: 30
                                    }

                                    wizard.heal.call(archer,50,30) <span class="comment">//the first param is the object followed by the parameters of the function heal</span>

                                    archer

                                    output:
                                    Object { name: "Trax", health: 110 }

                                    <span class="comment">// now the apply accepts array of parameters this is how it looks like</span>

                                    wizard.heal.apply(archer, [50, 30])

                                    archer

                                    output:
                                    Object { name: "Trax", health: 110 }
                                </pre>

Call and Apply are used for borrowing methods of an object

While bind is useful to call a function for later on use, because we are storing a function of another object to another variable.

<pre>                                        const wizard = {
                                            name: 'Chen',
                                            health: 100,
                                            heal : function(num1, num2){
                                                this.health += num1 + num2 ;
                                            }
                                        }

                                        const archer = {
                                            name: 'Trax',
                                            health: 30
                                        }

                                        const healArcher = wizard.heal.bind(archer, 10, 30);

                                        healArcher() <span class="comment">//now we can call it, but we can call it for later use right ?</span>

                                        archer

                                        output:
                                        Object { name: "Trax", health: 70 }
                                </pre>

Another tricks for using bind

<pre>                                    function multiply(a,b){
                                        return a*b;
                                    }
                                    <span class="comment">// the goal here is to give a partial parameter to the multiply function</span>
                                    let multiplyByTwo = multiply.bind(this, 2);
                                    let multiplyByTen = multiply.bind(this,10);

                                    console.log(multiplyByTwo(4));
                                    console.log(multiplyByTen(5));

                                    output:
                                    8
                                    50
                                </pre>

Context vs Scope

Scope is a function based, it is about what variable a function can access when it is invoked

Context is all about object based, context is what the value the this keyword which is that reference that object that owns that current execution code

Context can be determine of how a function invoked the value of this keyword

and scope refers to the visibility of variables

</div>

<div class="box day">

<div class="heading"><span class="date">April 30, 2019</span>

###### Day 9

</div>

**Javascript Types** has 7 of them

*   Number
*   String
*   boolean
*   Undefined
*   null
*   symbol
*   Object

undefined - is the absence of definition

null - is the absence of value

**Primitive and Non-Primitive**

Primitve type - has single value

Non-Primitive type - has more than 1 value (obj,function,array)

To check if it is an array

<pre>                                        var arr = [];
                                        var notArr = {};
                                        console.log(Array.isArray(arr));
                                        console.log(Array.isArray(notArr));

                                        output:
                                        true
                                        false
                                    </pre>

Primitive type can pass by value

<pre>                                        var a = 5;
                                        var b= a;

                                        b++;

                                        console.log(a);
                                        console.log(b);

                                        output:
                                        5
                                        6
                                    </pre>

while non-primitive type reference a value not passing a value

<pre>                                        const obj1 = { name : 'vindecode', pass : '123' };
                                        const obj2 = obj1;

                                        obj2.pass = 'easypeasy';

                                        console.log(obj1);
                                        console.log(obj2);

                                        output:
                                        Object { name: "vindecode", pass: "easypeasy" }
                                        Object { name: "vindecode", pass: "easypeasy" }

                                        <span class="comment">// same with array</span>

                                        const arr1 = [1,2,3];
                                        const arr2 = arr1

                                        arr2.push(123123123);
                                        console.log(arr2);
                                        console.log(arr1);

                                        output:
                                        Array(4) [ 1, 2, 3, 123123123 ]
                                        Array(4) [ 1, 2, 3, 123123123 ]

                                        <span class="comment">// but what if, we really would like to copy a new array, we can simply do this.</span>

                                        const arr1 = [1,2,3];
                                        const arr2 = [].concat(arr1);

                                        arr2.push(123123123);
                                        console.log(arr2);
                                        console.log(arr1);

                                        output:
                                        Array(4) [ 1, 2, 3, 123123123 ]
                                        Array(4) [ 1, 2, 3 ]

                                        <span class="comment">//doing this on object it would be deferent code</span>

                                        const obj1  = {a: 1, b: 2, c: 3};
                                        const cloned = Object.assign({}, obj1);

                                        obj1.c = 100;

                                        console.log(cloned);
                                        console.log(obj1);

                                        output:
                                        Object { a: 1, b: 2, c: 3 }
                                        Object { a: 1, b: 2, c: 100 }

                                        <span class="comment">//other ways of doing it. using the spread operator its a new feature of javascript</span>

                                        const obj1  = {a: 1, b: 2, c: 3};
                                        const cloned = {...obj1};

                                        obj1.c = 100;

                                        console.log(cloned);
                                        console.log(obj1);

                                        output:
                                        Object { a: 1, b: 2, c: 3 }
                                        Object { a: 1, b: 2, c: 100 }
                                    </pre>

They both equal because obj or non premitive type pointing on same memory on which the object is, not same with primitive had deferent memory locations. so it means that non primitive types are referencing.

Good thing about referencing we save to much cost of memory because objects can hold a massive memory thats why it only reference a value not copying it.

What we did for now is **shalow cloning**, what it means the we only copy the first layer of an object what if we had an object within an object

<pre>                                        const obj1  = {a: 1, b: 2, c: 3, d : {messy : 'try to copy me!'}};
                                        const cloned = {...obj1};

                                        obj1.d.messy = "gotcha!...";

                                        console.log(cloned);
                                        console.log(obj1);

                                        output:
                                        a: 1
                                        b: 2
                                        ​c: 3
                                        ​d: Object { messy: "gotcha!..." }

                                        a: 1
                                        b: 2
                                        ​c: 3
                                        ​d: Object { messy: "gotcha!..." }

                                        <span class="comment">// now were just referencing the second object we haven't copy it.</span>
                                    </pre>

Ways to **deep clone** an object is to do JSON

<pre>                                        const obj1  = {a: 1, b: 2, c: 3, d : {messy : 'try to copy me!'}};
                                        const cloned = JSON.parse(JSON.stringify(obj1));

                                        obj1.d.messy = "gotcha!...";

                                        console.log(cloned);
                                        console.log(obj1);

                                        output:
                                        a: 1
                                        b: 2
                                        ​c: 3
                                        ​d: Object { messy: "try to copy me!" }

                                        a: 1
                                        b: 2
                                        ​c: 3
                                        ​d: Object { messy: "gotcha!..." }

                                        <span class="comment">//now we are copying all the objects inside an object, were not referencing it anymore.</span>
                                    </pre>

Remember that it may cause to slow down your program by cloning an object, specially if your object are massive data, it may took time to clone all of the data on an object if it is massive.

<pre>                                        <span class="comment">//exercise</span>
                                        <span class="comment">// How would you compare two objects if they are pointing to a different location in memory but still have the same properties?</span>

                                        var user1 = {name : "nerd", org: "dev"};
                                        var user2 = {name : "nerd", org: "dev"};
                                        var eq = user1 == user2;
                                        console.log(eq); 

                                        output:
                                        false
                                    </pre>

Other answer [stackoverflow](https://stackoverflow.com/questions/1068834/object-comparison-in-javascript)

**Coercion** is converting a type to different type. to make it equal.

<pre>                                        1 == '1'
                                        <span class="comment">// coercion happens on double equal</span>

                                        output:
                                        true

                                        1 === '1'
                                        <span class="comment">// friendly advice always use 3 equals ;)</span>

                                        output:
                                        false
                                    </pre>

[Javascript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/) [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)  

**Static VS Dynamic Typing**

Static

*   C#
*   C
*   C++
*   Java

Dynamic

*   PHP
*   Javascript
*   Python
*   Ruby

Any programming language that declares a type of variable first example int a = b; this type of language are static while dynamic same with javascript var a = b; it doesnt require to put a stype of variable, this is how a dynamic works.

The good thing about static is that less bugs because we can actually catch all the error before it runs.

**Typescript** so we have this to make our javascript static, to have less bugs

**Strong and Weak Typing**

Javascript is a weak typing. but typescript can make our javascript strong

<pre>                                        var a = 'blablabla'
                                        a + 123;

                                        output:
                                        "blablabla123"

                                        <span class="comment">// this is how weak means its doing a coercion</span>
                                        <span class="comment">// in strong typed language you can't do this</span>
                                    </pre>

Just a review about the function()

When we invoke a function we already had a two parameters which is **this** and **arguments.**

When all know the arguments are like array of objects that has some weird behaviors for looping and etirations, so we wanna have avoid this, instead we gonna use some spread operators

Ways on invoking a function

<pre>                                        function a(){
                                            return 5;
                                        }
                                        a();

                                        const obj = {
                                            one : function () {
                                                return 1;
                                            }
                                        }

                                        obj.one;

                                        function a(){
                                            return 5;
                                        }

                                        a.call();

                                    <span class="comment">// other ways you might not see this before</span>
                                    <span class="comment">// this one called a FUNCTION CONSTRACTOR</span>
                                    const four = new Function('return 4');

                                    four();

                                    output:
                                    4

                                    <span class="comment">// we can also add a parameter</span>
                                    const four = new Function('num','return num');

                                    four(4);

                                    output:
                                    4
                                    </pre>

Remember that functions are objects a special objects or a callable objects

<pre>                                        <span class="comment">//this is the inside of a function
                                            /*
                                        somefunction(){
                                            code() - that we are going to execute when we call/invoke it
                                            Name(optional) - name of our function, it is optional because we can create anonymous function

                                            Properties { - remember this from the last pages
                                                .call()
                                                .apply()
                                                .bind()
                                            }
                                        } */</span> 
                                    </pre>

Other Ideas

<pre>                                        <span class="comment">// functions can be pass to a variable</span>
                                        var a = function(){};

                                        <span class="comment">// function can be a parameter of a function and run it within a function</span>
                                        function a(fn){
                                            fn();
                                        }

                                        a(function(){console.log('lallalalala')});

                                        <span class="comment">// we can return a function as a value of other function</span>
                                        function a(){
                                            return function b(){console.log('w0w');}
                                        }

                                        a()();

                                        output:
                                        w0w

                                        <span class="comment">// or assign it to a variable</span>
                                        var c = a();

                                        c();

                                        output:
                                        w0w
                                    </pre>

Because of this they called Javascript as **First Class Citizens**

Another idea

<pre>                                        <span class="comment">// we can put default parameter value to a function to avoid undefined</span>
                                        function a(param = 10){
                                            return param;
                                        }

                                        a()

                                        output:
                                        10

                                        <span class="comment">// this is a new feature for es6</span>
                                    </pre>

</div>

<div class="box day">

<div class="heading"><span class="date">May 1, 2019</span>

###### Day 10

</div>

**Higher Order Function (HOF)** are simply a function that can take a function as an argument or a function that returns another function.

But most people only understand what HOF does but didn't understand how useful is HOF is!.

Remember to create a generic functions so that it can be used by many,keep code dry,use HOF

**2 Pillars**

**Closures and Prototypes**

Closures is all about storing data if someone is still referencing on it even though the main function already pop out to the call stack it will be stored to the closure.

Closure is a combination of Lexical Scope and a function, closure will just happen if a function has an access of that variable. or its scope chain is available to that function.

<pre>                                            function a(){
                                                debugger; <span class="comment">// to pause the program at this line</span>
                                                let grandpa = "grandpa"
                                                return function b(){ <span class="comment">//before running this function a() will be pop out to the call stack</span>
                                                  let father = "father"
                                                  return function c(){ <span class="comment">//before running this function b() will be pop out to the call stack</span>
                                                    let son = "son"
                                                    return `${grandpa} > ${father} > ${son}` <span class="comment">//because of referencing the datas of function a() and b() , the datas will be stored on closures even though function a() and b() were already pop out to the stack.</span>
                                                  }
                                                }
                                              }
                                              a()()();
                                              <span class="comment">// on the debugger just press step in to run the code line by line.</span>

                                              output:
                                              "grandpa > father > son"
                                        </pre>

**2 Main benefits of Closures**

*   Memory Efficient
*   Encapsulation

<pre>                <span class="comment">//it is memory efficient because of these</span>
                function heavyDuty(index){
                const arr = new Array(7000).fill('V');
                console.log('created');
                return arr[index];
                }
                heavyDuty(600)
                heavyDuty(500)
                heavyDuty(1000)

                output:
                <span class="comment">// it was repeating, but with closure we can do it once</span>
                created
                created
                created
                "V"

                <span class="comment">//doing it with closure</span>

                function heavyDuty2(){
                    const arr = new Array(7000).fill('V');
                    console.log('Created Again');
                    return function(index){
                        return arr[index] <span class="comment">// were creating closure here because we reference arr from heavyDuty2 array</span>
                    }
                }

                const getHeavyDuty = heavyDuty2(); <span class="comment">// Again were referencing the function so were creating a closure with these</span>
                getHeavyDuty(800)
                getHeavyDuty(500)
                getHeavyDuty(400)

                output:
                Created Again <span class="comment">// now we do it once</span>
                "V"
            </pre>

Another Idea about closure and it is commonly interviewed problem

<pre>                <span class="comment">//here is the problem</span>
                const array = [1,2,3,4]
                for(var i=0; i < array.length; i++){
                    setTimeout(function(){console.log('Im at index ' + [i])}, 4000);
                }

                output:
                Im at index 4
                Im at index 4
                Im at index 4
                Im at index 4
                <span class="comment">// this is not what we want to appear.</span>

                <span class="comment">// solution 1</span>
                const array = [1,2,3,4]
                for(let i=0; i < array.length; i++){ <span class="comment">//changing var to let because let is block scope.</span>
                    setTimeout(function(){console.log('Im at index ' + [i])}, 4000);
                }

                output:
                Im at index 0
                Im at index 1
                Im at index 2
                Im at index 3

                <span class="comment">//solution 2 without using the let, we will use IIFE</span>
                <span class="comment">// were also doing closure here</span>
                const array = [1,2,3,4]
                for(let i=0; i < array.length; i++){ <span class="comment">//changing var to let because let is block scope.</span>
                (function(indexI){
                    setTimeout(function(){console.log('Im at index ' + [indexI])}, 4000);
                })(i);
                }

                output:
                Im at index 0
                Im at index 1
                Im at index 2
                Im at index 3
            </pre>

</div>

<div class="box day">

<div class="heading"><span class="date">May 04, 2019</span>

###### Day 11

</div>

**Prototypal Inheritance**, remember that arrays and functions are objects in javascript

<figure>![](img/Day11_img1.jpg)</figure>

The object there is the base object.

If we create an array or function when we add this __proto__ we can access the base object.

<pre>            <span class="comment">// Example</span>
            const array = [];
            array.__proto__

            output:
            <span class="comment">// it will return an array, but if we do it two times</span>
            array.__proto__.__proto__

            output:
            <span class="comment">//it now returns an object which is the base object</span>
            </pre>

Now lets try prototypal inheritance

<pre>                let dragon = {
                    name: "Alacad",
                    fire: true,
                    fight(){
                        return 5
                    },
                    sing(){
                        if(this.fire){
                            return `This is ${this.name} singing the dragon fire`
                        }
                    }
                }

                let lizard = {
                    name: "Kiki",
                    fight(){
                        return 1
                    }
                }

                <span class="comment">// we want to inherit the property of dragon which is fire and sing to our lizard how can we do that ?</span>
                lizard.__proto__ = dragon;

                lizard.sing()
                lizard.fire

                output:
                "This is Kiki singing the dragon fire"
                true
                <span class="comment">// now lizard has the property of sing() and fire which he inherit from the dragon</span>
            </pre>

Reminder that never ever use this __proto__ it affects the performance, but we have other ways of doing it later on Object Oriented Programming

Good thing about inheretance is that it saves a lot of memory, because imagine what if we had a lot of lizard then its really too bad to copy those properties all over, so that is how very important is inheritance is. Were being efficient with our code

Remember that __proto__ is just a pointer to what ever its base or something like in directory a cd .. your pointing back to your what ever previous.

<figure>![](img/Day11_img2.jpg)</figure>

The base ARRAY and FUNCTION has their own properties that their child functions or arrays can access.

Example the Base FUNCTION has:

*   call()
*   apply()
*   bind()

The reason why we can still access that properties its because functions that we created is inherting the parent which is the base FUNCTION

<pre>                <span class="comment">// just another idea on loop</span>
                const array = [1,2,3,4,5,6]
                for(let i in array){
                    console.log('this is the items of the array', array[i]);
                }

                output:
                this is the items of the array 1
                this is the items of the array 2
                this is the items of the array 3
                this is the items of the array 4
                this is the items of the array 5
                this is the items of the array 6
            </pre>

As i have mentioned were going to inherit an object without using that evil __proto__

<pre>                const human = {
                    mortal: true
                }

                const einstien = Object.create(human) <span class="comment">// einstien is still a human so we are goin to inherit human</span>
                einstien.mortal

                output:
                true
            </pre>

Remember that only functions has a prototype property

Adding a function to the Date which is already on javascript, how can we add a function their ?

<pre>                Date.prototype.lastYear = function(){
                    return this.getFullYear() - 1;
                }
                new Date('1990-10-10').lastYear();

                output:
                1989
            </pre>

<pre>                <span class="comment">//modify .map to print "V" at the end of each item</span>
                Array.prototype.map = function(){
                    let arr = [];
                    for (let i =0; i < this.length; i++){
                        arr.push((this[i] + "V"));
                    }
                    return arr;
                }

                console.log([1,2,3].map());

                output:
                Array(3) [ "1V", "2V", "3V" ]
            </pre>

But avoid modefying existed functions on the javascript it may cause trouble to other codes that uses it.

**Starting OOP**

From Procedural to Cleaner Code using OOP

**Factory Function** is a function that creates object

<pre>                <span class="comment">// step 1 of OOP without factory functions</span>
                <span class="comment">//Create two elfs</span>
                const elf = {
                    name: 'peter',
                    weapon: 'bow',
                    attack(){
                        return 'Attack with ' + elf.weapon
                    }
                }

                const elf2 = {
                    name: 'peter',
                    weapon: 'bow',
                    attack(){
                        return 'Attack with ' + elf.weapon
                    }
                }

                elf.attack();
                elf2.attack();

                <span class="comment">//step 2 with factory function</span>
                function createElf(name,weapon){
                    return {
                        name,
                        weapon,
                        attack(){
                            return 'Attack with ' + weapon
                        }
                    }
                }

                const peter = createElf('peter', 'stones');
                peter.attack();
                const molly = createElf('molly', 'gun');
                molly.attack();

                <span class="comment">//so we avoided lots of code, but their is still a problem here</span>
                <span class="comment">//what if we require 1000 elfs here, so we require a lot of space to store data</span>
                <span class="comment">//each time we create elfs we store attack() function on each of them so we need to apply closures and prototype next</span>

            </pre>

**Object.create**

<pre>                const elfFunctions = {
                    attack(){
                        return 'Attack with ' + this.weapon
                    }
                } 
                function createElf(name,weapon){
                    let newElf = Object.create(elfFunctions) <span class="comment">//were creating prototypal inheritance hereuuuuuuuuuuu</span>
                    newElf.name = name;
                    newElf.weapon = weapon;
                    return newElf;
                }

                const peter = createElf('peter', 'stones');
                console.log(peter.attack());
                const molly = createElf('molly', 'gun');
                console.log(molly.attack());
            </pre>

**Constructor Function**

<pre>                function Elf(name,weapon){
                    this.name = name;
                    this.weapon = weapon;
                }

                Elf.prototype.attack = function(){
                    return 'Attack with ' + this.weapon
                }
                const peter = new Elf('peter', 'stones'); <span class="comment">// to enable use the this key word we need to use new by calling the function</span>
                console.log(peter.attack());

                const molly = new Elf('molly', 'storm')
                console.log(molly.attack());

                output:
                "Attack with stones"
                "Attack with storm"

                <span class="comment">// remember that constructor function must have a new keyword, the built in constructor function in javascript are starts with capital letter</span>
                <span class="comment">When creating a constructor function use capital letter on first letter to let know other developer that it is a constructor and they were goin to use the new keyword</span>
                <span class="comment">// ex. Function(),Number(),Array()..etc</span>
            </pre>

By using constructor functions we can also create another function that all elfs that we created can use

<pre>                <span class="comment">// another idea here.</span>
                function Elf(name,weapon){
                    this.name = name;
                    this.weapon = weapon;
                    var a = 10; <span class="comment">//it will not allow us to console the value of a because only data we can get is that everything that has a this keyword</span>
                    console.log(a);
                }

                const peter = new Elf('peter','stones');
                peter

                output:
                Object { name: "peter", weapon: "stones" }
            </pre>

Because of the keyword new and we all know that new is defined as constructor function, new also creates prototype thats why we are able to create a Elf.prototype.attack but always remember that all functions has a prototype, yah its confusing but just code and code you'll just understand why.

<figure>![](img/Day11_img3.jpg)</figure>

</div>

<div class="box day">

<div class="heading"><span class="date">May 5, 2019</span>

###### Day 12

</div>

**ES6 Classes**

<pre>            <span class="comment">// comment here</span>
            class Elf{
                constructor(name,weapon){
                    this.name = name;
                    this.weapon = weapon;
                }
                attack(){
                    return 'Attack with ' + this.weapon;
                }
                sing(){
                    return this.name + ' sings lalala'
                }
            }

            const peter = new Elf('peter','stones')
            console.log(peter.attack())
            console.log(peter.sing())
            </pre>

Common interview question, why we are not putting the attack function to the constructor ?.

Its because constructor runs everytime we create an instance, name and weapon are unique but the attack is shares by all the elfs and it will cost a lot of memory if we want it to run everytime we instanciate.

instanciate is when we call a new Elf in our code that is instanciate, peter instanciate with elf class

* * *

**Object.create vs Classes**

What we did on classes can also be created on Object.create, although Object.create was the most pure thing, but it depends uppon the company eigther they will use Object.create or with classes.

* * *

**4 ways on manipulating the this key word**

<pre>                <span class="comment">//new binding this</span>
                function Person(name,age){
                    this.name = name;
                    this.age = age;
                }

                const person1 = new Person('Peter', 55); 
                person1

                <span class="comment">//person1 is now an object because of constructor we instanciate and because it is now an object the this keyword that we used   
 on function Person will directly point to the person1 object thats why we get it right and not undefined.</span>

* * *

                <span class="comment">//implicit binding</span>
                const person = {
                    name: 'vindecode',
                    age: 55,
                    hi(){
                        return 'hi this is ' + this.name
                    }
                }
                person.hi();

                <span class="comment">//it directly call its own object</span>

* * *

                <span class="comment">//explicit binding</span>
                const person = {
                    name: 'vindecode',
                    age: 55,
                    hi : function(){
                        console.log('hi' + this.setTimeout)
                    }.bind(window)
                }

                person.hi();

                <span class="comment">//we wanted to point this to window because we all know that setTimeout is a web API and can be seen on the window object. so we bind it to the window object using the bind()</span>
                <span class="comment">//this explicit ways can also use the call and apply method</span>

* * *

                <span class="comment">//arrow functions</span>
                const person = {
                    name: 'vindecode',
                    age: 55,
                    hi : function() {
                        var inner = () => {
                            return this.name;
                        }
                        return inner()
                    }
                }
                person.hi();

                <span class="comment">//becuase of arrow function we allow it to point where it was called, it acts like implicit because we call it on function hi</span>
                <span class="comment">//without arrow function that this will point to window object</span>
            </pre>

* * *

**Inheritance**

<pre>                class Character{ <span class="comment">//this is a super class</span>
                    constructor(name,weapon){
                        this.name = name;
                        this.weapon = weapon;
                    }
                }

                class Elf extends Character { <span class="comment">//this is a sub class</span>
                    constructor(name,weapon,type){
                        super(name,weapon); <span class="comment">//we really need to call the super class which is Charater to able to use the this keyword</span>
                        this.type = type;
                    }
                }

                class Ogre extends Character {
                    constructor(name,weapon,color){
                        super(name,weapon);
                        this.color = color;
                    }

                    buildHouse() {
                        return 'Building the biggest house'
                    }
                }

                const peter = new Elf('Peter','Stones', 'Elf');
                console.log(peter);
                const shrek = new Ogre('Shrek', 'Puddle', 'Green');
                console.log(shrek);
                console.log(shrek.buildHouse());

                <span class="comment">//As you can see super or the Parent class here represents the general needs of the sub classes.</span>
                <span class="comment">// extends is linking not copying</span>
            </pre>

* * *

**public and private** is still under construction

* * *

**4 pilars of OOP**

*   **Encapsulation** - creating boxes or parts of each functions or grouping them
*   **Abstraction** - giving data to a function and allow them to run at the background and gives you the output
*   **Inheritance** - extending or linking one function to other function to allow dry code or to avoid copy and pasting similar codes.
*   **Polymorphism** - calling similar code but produces different outputs

* * *

**Functional Programming** is all about separation of conerns which object oriented programming does as well right ?. its all about separating our codes into different chunks so that everything is well organize, but OOP separates codes buy object or by parts while functional separates functions and data's

Important pillar of the functional programming is **Pure Functions** it separates the data of a program and the behavior of a program

What are **Pure Functions ?** when it comes to pure functions theirs two main things a function has to always return the same output given the same input and the function cannot modify anything outside of it self no side effects

Pure Functions:

*   No side effects
*   input --> output same

<pre>                <span class="comment">//side effects is a function that modifies anything outside of it self</span>
                const array = [1,2,3]
                function a(arr){
                    arr.pop()
                }

                a(array);
                console.log(array);

                output:
                Array [ 1, 2 ] <span class="comment">//this is called side effects because we modify data from the outside of a function</span>

                <span class="comment">//no side effects</span>
                const array = [1,2,3]
                function a(arr){
                    const newArray = [].concat(arr) <span class="comment">//now we copy array instead of referencing it so that we can avoid side effects   
 to its global variable which is from the outside of this function</span>
                    newArray.pop()
                    return newArray
                }

                console.log(a(array)); <span class="comment">//function</span>
                console.log(array); <span class="comment">//original no side effects</span>

                output:
                Array [ 1, 2 ] <span class="comment">// function</span>
                Array(3) [ 1, 2, 3 ] <span class="comment">// original variable array</span>

* * *

                <span class="comment">//another no side effects</span>
                const array = [1,2,3]
                function multiplyByTen(arr){
                    return arr.map(item => item * 10)
                }

                console.log(multiplyByTen(array))
                console.log(array)

                output:
                Array(3) [ 10, 20, 30 ] <span class="comment">// function</span>
                Array(3) [ 1, 2, 3 ] <span class="comment">// original variable array it has no side effect</span>

            </pre>

**Referential Transparency**

<pre>                function a(num1,num2){
                    return num1 + num2
                }
                function b(num){
                    return num*2
                }
                b(a(3,4)); <span class="comment">//this is equal to 7</span>
                b(7) <span class="comment">// referential transparency means if we change this to 7 it will produce same output as b(a(3,4))</span>

                output:
                14
                14

                <span class="comment">//and both of this are not having any side affects to the outside world because they only modifying their parameters   
and parameters are local variables</span>

                <span class="comment">//the idea also of input --> output is that even how many times we run the function the output will always be the same nothing will change.</span>
            </pre>

<pre>                <span class="comment">//another idea on loop</span>
                const array = ["A","B","C","D"];
                function myArray(arr){
                    arr.forEach(item => {
                        console.log(item)
                    })
                }
                myArray(array);

                output:
                A
                B
                C
                D
            </pre>

<pre>                <span class="comment">//another idea about array</span>
                function greaterThanTen(array){
                    return array.map(item => item > 10 ? true : false)
                }

                greaterThanTen([1,2,3,4,5,6,7,8,9,10,11])

                output:
                Array(11) [ false, false, false, false, false, false, false, false, false, false, true]
            </pre>

</div>

<div class="box day">

<div class="heading"><span class="date">May 06, 2019</span>

###### Day 13

</div>

**Idempotence** is about having the same result no matter how many times we run the function

<pre>                    function a(num){
                        return num;
                    }
                    a(a(a(5)));

                    output:
                    5

                    <span class="comment">//another example</span>

                    Math.abs(Math.abs(Math.abs(-100)));

                    output:
                    100
                </pre>

Get the idea about Idempotence ? no matter how many times we call the function the output would be the same

* * *

**Imperative vs Declarative**

*   **Imperative** - is code that tells the machine on what to do and how to do. or a step by step guide to get the required task that you want it to do.
*   **Declarative** - just a direct task no step by step instruction

<pre>                <span class="comment">// dont be confused by this</span>
                for( let i= 0; i < 1000; i++){ <span class="comment">//this is Imperative</span>
                    console.log(i)
                }

                [1,2,3].forEach(item => console.log(item)); <span class="comment">//this is declarative</span>

                </pre>

Declarative code is better, but we cannot avoid having Imperative code.

* * *

**Immutability** is about not changing everything or not changing the state, just copy it but do not change

<pre>                    const obj = {
                        name : "vince",
                        clone() {
                            return {... obj} <span class="comment">//this is pure</span>
                        }
                    }

                    function updateName(obj){
                        const updatedName = obj.clone(obj);
                        updatedName.name = "Nana"
                        return updatedName
                    }

                    output:
                    Object { name: "vince", clone: clone() }
                    Object { name: "Nana", clone: clone() }

                    <span class="comment">//now we are not changing everything nor its state but copying it.</span>
                </pre>

**Currying** is taking a parameter of a function one at a time

<pre>                    const multiply = (a) => (b) => a*b;
                    const multiplyByTen = multiply(10);
                    multiplyByTen(5);

                    output:
                    50
                </pre>

**Partial Application**

<pre>                    const multiply = (a,b,c) => a*b*c
                    const multiplyByFive = multiply.bind(null,5); <span class="comment">//null because we do not have this here but we gave argument 5 to parameter a</span>
                    multiplyByFive(10,4) <span class="comment">//which is the b and c parameters</span>

                    output:
                    200
                </pre>

**Memoization** is about remembering things that already been calculated so that it doesnt required time to calculate it again

<pre>                    const cache = {}

                    function addTo80(n){
                    if(n in cache){
                        return cache[n];
                    }else{
                        console.log('Calculating in a long time')
                        cache[n] = n + 80;
                        return cache[n]
                    }
                    }

                    console.log(addTo80(5));
                    console.log(addTo80(5));
                    console.log(addTo80(5));
                    console.log(addTo80(20));
                    console.log(addTo80(30));

                    output:
                    Calculating in a long time
                    85
                    85
                    85
                    Calculating in a long time
                    100
                    Calculating in a long time
                    110

* * *

                    <span class="comment">//optimizing our code using closures</span>
                    <span class="comment">//moving the cache to the function, because we need to avoid global variables</span>
                    function addTo80(){ <span class="comment">//we are transfering the param because we are now calling returned func</span>
                        const cache = {}
                    <span class="comment">//lets add another function to avoid cache to be reset to empty object</span>
                    <span class="comment">//so that we will just need to call this function</span>
                    return function(n){
                        if(n in cache){
                            return cache[n]; <span class="comment">//we are doing closure because we reference cache</span>
                        }else{
                            console.log('Calculating in a long time')
                            cache[n] = n + 80;
                            return cache[n]
                        }
                    }
                    }
                    <span class="comment">//now we are going to assign addTo80</span>
                    const memoized = addTo80(); <span class="comment">//by calling these we load cache on memory and it will never reset because we call it once</span>

                    console.log(memoized(10)); <span class="comment">//we are running the function inside the addTo80</span>
                    console.log(memoized(50));
                    console.log(memoized(50));
                    console.log(memoized(10));

                    output:
                    Calculating in a long time
                    90
                    Calculating in a long time
                    130
                    130
                    90
                </pre>

* * *

**Compose** is something like a data processed by a function and output with a data and processed by a function again and so on and so fort

data --> fn --> data --> fn --> data

<pre>                    <span class="comment">// accepts a negative number</span>
                    <span class="comment">//multiply it by 3</span>
                    <span class="comment">//convert to positive number</span>

                    const compose = (f,g) => (data) => f(g(data))
                    const multiplyBy3 = (num) => num*3;
                    const makePositive = (num) => Math.abs(num);
                    const multiplyBy3AndAbsolute = compose(multiplyBy3,makePositive); <span class="comment">//param f and g</span>

                    multiplyBy3AndAbsolute(-50); <span class="comment">//param of data</span>

                    output:
                    150
                </pre>

Compose is a very strong technique in functional programming so please practice this technique try to do something more.

Other than compose we also have a **Pipe** the only difference about this is that Pipe do the reverse thing example

Compose : a() -> b() -> c()

Pipe : c() -> b() -> a()

* * *

**Aritiy** is the number of parameter of a function

<pre>                    function a(num1,num2) <span class="comment">//it has a arity of 2</span>
                    function b(f,g,h) <span class="comment">//it has a arity of 3</span>
                </pre>

Just a reminder, it is better that the maximum of parameter of your function is two, because it is easy to maintain and reusable

* * *

Exercise The Amazon Exercise

<pre>                <span class="comment">// Amazon Shopping</span>
                const user = {
                    name: 'Kim',
                    active: true,
                    cart: [],
                    purchases: []
                }
                <span class="comment">//Implement a cart feature:</span>
                <span class="comment">//1\. Add Items to cart.</span>
                <span class="comment">//2\. Add 3% tax to item in cart</span>
                <span class="comment">//3\. Buy item: cart --> purhaces</span>
                <span class="comment">//4\. Empty Cart</span>

                <span class="comment">//Bonus</span>
                <span class="comment">// Allow Refunds</span>
                <span class="comment">// Track user or user log</span>

                <span class="comment">//this solution applies pure functions, Compose</span>

                const compose = (f,g) => (...args) =>  f(g(...args));
                purchaseItem(
                    emptyCart,
                    buyItem,
                    applyTaxToItems,
                    addItemToCart
                )(user, {name: 'laptop', price: 200})

                function purchaseItem(...fns) { 
                    return fns.reduce(compose) 
                }

                <span class="comment">//this is a pure function</span>
                function addItemToCart(user,item) {
                    const updateCart = user.cart.concat([item])
                    return Object.assign({},user, {cart: updateCart})
                }

                function applyTaxToItems(user){
                    const {cart} = user;
                    const taxRate = 1.3;
                    const updatedCart = cart.map(item => {
                        return{
                            name: item.name,
                            price: item.price * taxRate
                        }
                    })
                    return Object.assign({},user,{cart: updatedCart})
                }

                function buyItem(user) {
                    return Object.assign({},user,{purchases: user.cart})
                }

                function emptyCart(user) {
                    return Object.assign({},user,{cart: []})
                }

                <span class="comment">//updated code of this is on the js file</span>
                </pre>

As you would expect functional is more powerful than oop

<figure>![](img/Day13_img1.jpg)</figure>

**Review**

Inheretance is a super class that is extended into smaller pieces that add or overight things

Composition is smaller pieces to create something bigger, smaller pieces that is combined to create something bigger

Lot's of programmers prefer Composition than Inheretance, because their are some problems that Composition can solved that the Inheretance can't

* * *

Inheretance focuses on what class it is or what is object what are the properties

**Poblems may encounter**

> Problems with inheretance is that it may cause errors when updating or changing sub class or its super class because it will afect each classes

> Hierarchy problem when you start to add some classes example below

<pre>Class a(1,2,3,4)
    Class b(1,2,3,4)

Class d(1,2,3,4)
    Class c(1,2,3,4)

what if we are going to add a new class on b that only needs the value 3
    Class a(1,2,3,4)
        Class b(1,2,3,4)
            Class g(3) -> it only needs the value of 3 but in reality were giving him 1,2,3,4 because we are inhereting,
            until the program start updating more and more it will cause a lot of errors,
                        then we start to refactor it again until of a sudden we start violating the prenciple of doing dry code or do not repeat yourself.
                        this is the most common problem on inheretance

                </pre>

* * *

Composition focuses on what it has or what to do we that data

The problem of inheretance can be solved using composition

</div>

<div class="box day">

<div class="heading"><span class="date">May 07, 2019</span>

###### Day 14

</div>

**Functional Programming vs Object Oriented Programming** these are programming paradigm

Organizing codes into units will be called OOP

Avoiding side effects or writing pure functions will be called Functional Programming

In OOP an object containing information and operations that are supposed to refered to the same concept, were groupit as an object, this pieces of information inside of the objects are called attributes or state and the operation that happen on the state are known as methods

In Functional Programming the code is essentially a combination of function and data is immutable which leads to writa programs with no side effects and pure functions becuase in a function programming paradigm that function cannot chathe outside world and the out value of a function simple depends on the givin arguments this allows functional programmto really have control over a program flow

* * *

Both of this paradigm are good on their own ways.

<figure>![](img/Day14_img1.jpg)</figure>

<figure>![](img/Day14_img2.jpg)</figure>

Functional Programming is good for processing large data applications

OOP is good when their is a lot of Objects or Characters with a few operations will be a good solution

But you can still use the both of ideas

Two main components of an application (Data, behavior)

OOP get all the data and the behavior in a single location which is the Object or Class

Functional Programming the data and behavior must be kept separately

</div>

<div class="box day">

<div class="heading"><span class="date">May 10, 2019</span>

###### Day 15

</div>

This is just a review from foundation of javascript starting at day 5

Javascript Engine consist of two parts which is the Call stack and memory heap

Call stack - This is were the code was read, it tells you were you are on the code

Memory Heap - This is were the memory allocation happens

Recursion - is a function that calls it self

<pre>                    function foo(){
                        foo();
                    }
                    foo();
                </pre>

<figure>![](img/Day15_img1.jpg)</figure>

synchronous one task at a time

asynchronous multiple task at a time

Event Listener are on the callback queue already

Call back pyramid of doom

<pre>                movePlayer(100, 'Left', function(){
                    movePlayer(150, 'Left', function(){
                        movePlayer(200, 'Left', function(){
                            movePlayer(350, 'Left', function(){
                            });
                        });
                    });
                });
                </pre>

<figure>![](img/Day15_img2.jpg)</figure>

New In ES using promise, higher priority than Callback Queue

<pre>                console.log("1");
                setTimeout(()=>{console.log("2")},0);
                Promise.resolve('3').then((data) => console.log(data));
                console.log("4");

                output:
                1
                4
                3
                2

                <span class="comment">//now you can see who was the highest priority</span>
                </pre>

Callback Queue - Task Queue

Job Queue - Microtask Queue

* * *

**Promises** a new feature of es6

A promise is an object that may produce a single value some time in the future. Either a reserve value, or a reson that its not resolved (rejected)

<pre>                <span class="comment">Instantiating new Promise</span>
                const promise = new Promise((resolve,reject) => {
                    if(true){
                        resolve("It worked");
                    }else{
                        reject("It broke");
                    }
                });

                <span class="comment">// invoking the promise</span>
                promise.then(result => {console.log(result)});
                <span class="comment">// or doing this</span>
                promise.then(console.log)

                output:
                It worked
                It worked
                <span class="comment">//it worked cause we statically put true to our condition</span>
                </pre>

Throwing an error

<pre>                const promise = new Promise((resolve, reject) => {
                    if(true){
                        resolve('It worked')
                    }else{
                        reject('It broke');
                    }
                })
                promise
                .then(result => result + '!')
                .then(result2 => {
                    throw Error
                    console.log(result2)
                })
                .catch(console.log); <span class="comment">// you can also do this .catch(() => console.log("Error!"))</span>

                output:
                Promise { <state>: "pending" }
                function Error()

                <span class="comment">//if we use the other catch that was commented the output will be</span>

                output:
                Promise { <state>: "pending" }
                Error!</state> </state></pre>

Great power about this promises are we can run multiple task at the background.

<pre>                const promise1 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 100, "hallow")
                })

                const promise2 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 1000, "yeee haa!")
                })

                const promise3 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 3000, "Hoola")
                })

                const promise4 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 5000, "It was me!")
                })

                Promise.all([promise1,promise2,promise3,promise4])
                .then(values =>{console.log(values)})

                output:
                Array(4) [ "hallow", "yeee haa!", "Hoola", "It was me!" ]
                </pre>

Real World Application of promise

<pre>                <span class="comment">// we used this to fetch json</span>
                const urls = [
                'https://jsonplaceholder.typicode.com/users',
                'https://jsonplaceholder.typicode.com/posts',
                'https://jsonplaceholder.typicode.com/albums'
                ]

                Promise.all(urls.map(url => {
                    return fetch(url).then(resp => resp.json())
                })).then(results => {
                    console.log(results[0])
                    console.log(results[1])
                    console.log(results[2])
                }).catch(() => console.log("miss spelled the url or you do not have an internet"))

                <span class="comment">//You need an internet to make this work</span>
                </pre>

</div>

<div class="box day">

<div class="heading"><span class="date">May 11, 2019</span>

###### Day 16

</div>

**ES8 / ES2017**

**Async Await** is a function that returns a promise, but the benefit of async await is that it makes code easier to read

It does the same thing on promises on es6 / es 2015 but only the difference is the syntax or what they called as "Syntactic Sugar" - it does the same thing but only the syntax are different.

promises uses .then keywords, while async await uses async and await keywords.

<pre>        <span class="comment">// using es6 promise</span>
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(console.log)

        <span class="comment">// using async await es8 promise</span>
        async function fetchUsers(){
            const resp = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await resp.json()
            console.log(result)
        }
        fetchUsers()
        </pre>

Another example

<pre>        <span class="comment">//this is es6</span>
        const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/albums',
        ]

        Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(array => {
            console.log('users',array[0])
            console.log('posts',array[1])
            console.log('albums',array[2])
        }).catch('ooops');

        <span class="comment">//using async await</span>
        const getData = async function(){
        try{

                const [users,posts,albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
                console.log('users',users)
                console.log('posts',posts)
                console.log('albums',albums)
            }
        catch (err){
            console.log('Oops' ,err)
            }
        }
        </pre>

**ES9 / ES 2018 the object spread operators**

<pre>            const animals = {
                tiger: 22,
                lion: 5,
                monkey: 2
            }

            <span class="comment">//this is what they called as distructure, creating object from the global</span>
            const {tiger, ...rest} = animals;
            tiger
            output:
            22
            rest
            output:
            Object { lion: 5, monkey: 2 }

        <span class="comment">//another example</span>
        const array = [1,2,3,4,5];
        function sum(p1,p2,p3,p4,p5){
            return p1 + p2 + p3 + p4 + p5;
        }
        sum(... array)

        output:
        15

        <span class="comment">//another example</span>
        const array = [1,2,3,4,5]; <span class="comment">//you can extend more data on this array</span>
        function sum(...args){
            const arr = Array.from(args);
            let s = 0;
            arr.forEach(item => {
                s += item
            })
            return s;
        }
        sum(...array)

        output:
        15

        <span class="comment">//another example</span>
        const animals = {
            dog: 1,
            bird: 3,
            fish: 5,
            lion: 10
        }

        const {dog,bird,...rest} = animals
        dog
        output:
        1
        bird
        output:
        3
        rest
        output
        Object { fish: 5, lion: 10 }
        </pre>

The **finally** keyword

<pre>        const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/albums',
        ]

        Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(array => {
            throw Error
            console.log('users',array[0])
            console.log('posts',array[1])
            console.log('albums',array[2])
        }).catch('ooops')
        .finally(() => console.log('Extra Task Here'));
        </pre>

The use of finally is that to run extra functionality no matter what happen even if it throws an error

* * *

The **for await of** is used to loop await promises

* * *

There are 3 things about promises:

*   Parallel - running them at the same time.
*   Sequence - after finish the first one another one will be run
*   Race - who comes back first just do that one and ignore the rest

<pre>            const promisify = (item,delay) =>
            new Promise((resolve) =>
            setTimeout(() => resolve(item),delay));

            const a = () => promisify('a', 100);
            const b = () => promisify('b', 5000);
            const c = () => promisify('c', 3000);

            <span class="comment">//parallel</span>
            async function parallel(){
                const promises = [a(),b(),c()];
                const [output1,output2,output3] = await Promise.all(promises);
                return `parallel is done: ${output1} ${output2} ${output3}`
            }

            parallel().then(console.log);

            output:
            Promise { <state>: "pending" }
            parallel is done: a b c

            <span class="comment">//Sequence</span>
            async function race(){
                const promises = [a(),b(),c()];
                const output1 = await Promise.race(promises);
                return `race is done: ${output1}`;
            }

            race().then(console.log);

            output:
            Promise { <state>: "pending" }
            race is done: a

            <span class="comment">//Sequence</span>
            async function sequence(){
                const output1 = await a();
                const output2 = await b();
                const output3 = await c();

                return `sequence is done: ${output1} ${output2} ${output3}`
            }

            sequence().then(console.log);

            output:
            Promise { <state>: "pending" }
            sequence is done: a b c

            <span class="comment">//uncomment some of the function, dont run them together</span>

            <span class="comment">//now we can try to run both of them</span>
            <span class="comment">//it doesnt matter the sequence here because this is asynchronous it can be put any sequence they both all run at the same time</span>
            sequence().then(console.log);
            race().then(console.log);
            parallel().then(console.log);

            output:
            race is done: a <span class="comment">//it takes the smallest task which is 100ms</span>
            parallel is done: a b c <span class="comment">//it takes the longest task which is 5seconds</span>
            sequence is done: a b c <span class="comment">//the sum of all the task 8seconds and 100ms</span></state> </state></state></pre>

</div>

<div class="box day">

<div class="heading"><span class="date">May 12, 2019</span>

###### Day 17

</div>

Javascript Module, a module is used to create large applications becuase without modules we cannot create large applications because of this problems. When we create a function we need a function that can communicate with other function so we solved this by creating a global variable, but the problem with this is that, this global variable can posibly be overwritten without a notice. So to solve this we need to use modules, the one who organize our functions and variables.

<pre>            <span class="comment">// Global Scope</span>
            var a ="a";

            <span class="comment">// Function Scope</span>
            function a(){
                var a="a";
            }

            <span class="comment">// Block Scope</span>
            const a = "a";
            let b = "b";
            </pre>

The first module, **Module Pattern**

<pre>        <span class="comment">// We can use IIFE and assigned it to a variable and if we want something inside a function   
 we can just return an object with the function inside</span>

        const getWinner = (function(){
            var vince = 500;
            var jjj = 400;

            function fight(person1,person2){
                return person1.length > person2.length ? person1 : person2;
            }

            <span class="comment">// now we can allow which function we want to export</span>
            return {
                fight: fight
            }
        })() <span class="comment">// we can import some functions here as a parameter of our IIFE</span>

        getWinner.fight('Vincent','Mark')

        <span class="comment">// Now we can access this, and its not in a global, and we have a private variable which is vince and jjj</span>
        </pre>

But were still had a problem in here, because were still poluting getWinner as a global

To solve this we can use <span class="search">CommonJs</span> but CommonJs is a synchronous it may slow up our application and to solve this we had a module bundlers <span class="search">browserify and WebPack</span> to bundle all modules into one javascript file. CommonJs commonly used in node.js applications

Another is <span class="search">AMD</span> still synchronous, its commonly used by now

We also have <span class="search">UMD</span> combination of both AMD and CommonJs but its just an if else statement.

* * *

The **ES6 Modules**

<pre>            <span class="comment">//specifiy the path of the file ./js/main.js</span>
            import module1 from 'jsfile'
            import module1 from 'anotherjsfile'

            export function jump(){

            }
        </pre>

[More ES6 Module Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) [More ES6 Module Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)  

* * *

</div>

<div class="box day">

<div class="heading"><span class="date">May 13, 2019</span>

###### Day 18

</div>

**Error Handling**

<pre>        <span class="comment">// try catch</span>
        function fail(){
            try{
                console.log(abcdefg);                
            }catch (a){
                <span class="comment">// console.log('Opsie', a);</span>
                <span class="comment">// console.log('Opsie', a.name);</span>
                <span class="comment">// console.log('Opsie', a.message);</span>
                <span class="comment">// console.log('Opsie', a.stack);</span>
            }
        }

* * *

        throw new Error('Opsie') <span class="comment">// to stop all the program</span>
        throw Error <span class="comment">// to stop all the program</span>

        <span class="comment">// try catch with finally</span> 

        function fail(){
            try{
                console.log(avcde)
            }catch(e){
                console.log('opsie', e)
            }finally{
                console.log('Still Good');
            }
        }
        </pre>

Remember that try catch is not good for asynchronous

* * *

Asynchronous Error Handling

<pre>            Promise.resolve('asyncfail')
            .then(response => {
                throw new Error('#1 fail')
                return response
            })
            .then(response => {
                console.log(response) 
            })
            .catch(err => {
                console.log(err)
            })
        </pre>

Async Await Error Handling

As we say try catch is only for synchronous, but async await can use this because of the key word await

<pre>        (async function(){
            try{
            await Promise.resolve('good')
            await Promise.reject('bad')
            console.log('Is this still good ?')
            }catch(err){
                console.log(err)
            }
        })()
        </pre>

Extending Erros to customize so that we can avoid showing too much information about our error, because it will give some reference of hackers to exploit our applications

<pre>            class authenticationError extends Error{
                constructor (message){
                    super(message)
                    this.favouriteSnacks = "grapes"
                }
            }

            const a = new authenticationError('Oppsie');
            console.log(a.message)
            console.log(a.favouriteSnacks)

            output:
            "Oppsie"
            "grapes"

* * *

            <span class="comment">//more customize error you can make, e.g</span>
            class databaseError extends Error{
                constructor (message){
                    super(message)
                    this.name = "DatabaseError"
                    this.favouriteSnacks = "grapes"
                }
            }

            class connectionError extends Error{
                constructor (message){
                    super(message)
                    this.name = "connectionError"
                    this.favouriteSnacks = "grapes"
                }
            }
        </pre>

Error is not really an error but a feature with the use of Error Handling

When you right code always think about validation of every input of a user to avoid errors

</div>

</div>

<