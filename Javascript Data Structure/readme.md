<div>
<div>
<div>Month 13, 2019
<h6>Day 1</h6>
</div>
<p>What is a <strong>Data Structure ?</strong> . A data structure is a collection of values,algorithms are the steps or processes we put into place to manipulate this collection of values, it allows us to write programs. A person knows how Data Structures and algorithms work and how to use them can write programs, great programs</p>
<p>Data Structure is a container with a specific values or items that can be stored inside of it. Example</p>
<ul>
<li>Bag - used to store books and other school staffs</li>
<li>Cabinet - used to store clothes</li>
<li>Refregerator - used to store foods</li>
<li>Folder - used to store papers and other documents</li>
<li>Box - used to store something maybe toys</li>
</ul>
<p>So that we can go where ever we need something easily, its something like ways to organize our data on our computers</p>
<hr /><strong>Array</strong>
<p>If all you need is storing data and iterate over it that is 1 by 1 , step by step <strong>Arrays</strong> are best choice</p>
<pre> const array = ['a', 'b', 'c'];
 array[0] //accessing array by index
 //inserting array from the end
 array.push('datahere')
 //deleting data from the end
 array.pop()
 //adding data from the beginning
 array.unshift('datahere')
 //deleting data from specific index
 array.splice(0,1) //first parameter is target index, second is how many items to be deleted, third is the value wanted to be added
 //adding data from specific index
 array.splice(0,0,'GG'); //first parameter is target index, second is how many items to be deleted, third is the value wanted to be added
 </pre>
<hr /><strong>2 types of Array</strong>
<ul>
<li>Static Array - static array had a fixed length of data can hold</li>
<li>Dynamic Array - dynamic length of data can hold</li>
</ul>
<p>Exercise Lets create our own array functions!</p>
<pre> class MyArray {
 constructor(){
 this.length = 0
 this.data = {}
 }
 get(index){
 return this.data[index]
 }
 push(item){
 this.data[this.length] = item
 this.length++
 return this.data
 }
 pop(){
 const lastItem = this.data[this.length -1]
 delete this.data[this.length -1]
 this.length--;
 return this.data
 }
 delete(index){
 delete this.data[index]
 this.shiftItems(index)
 return this.data
 }
 shiftItems(index){
 for(let i = index; i &lt; this.length-1; i++){
 this.data[i] = this.data[i+1]
 }
 delete this.data[this.length - 1]
 this.length--
 }
 }
 //testing our MyArray
 const newArray = new MyArray() //Instantiating the class MyArray
 newArray.push('A')
 newArray.push('B')
 newArray.push('C')
 newArray.push('D')
 newArray.pop()
 newArray.delete(1)
 newArray.get(1)
 //you can create your own Data Structure
 </pre>
</div>
<div>
<div>May 17, 2019
<h6>Day 2</h6>
</div>
<p>Reversing a string</p>
<pre>// this is my answer
const string = "vincent";
const reverse = function(text){
let converted = "";
for(let i = text.length-1; i &gt;= 0; i--){
converted = converted + text[i];
}
return converted
}
reverse(string)
output:
"tnecniv"
//other answer
function reverse(str){
 return str.split('').reverse().join('');
}
reverse("vincent")
output:
"tnecniv"
//with es6 function expression
const reverse = str =&gt; str.split('').reverse().join('');
reverse("vincent")
output:
"tnecniv"
//other more ways using spread operator
const reverse = str =&gt; [...str].reverse().join('');
reverse("vincent")
output:
"tnecniv"
 </pre>
</div>
<div>
<div>May 21, 2019
<h6>Day 3</h6>
</div>
<p>Sorting and merge arrays</p>
<pre>// this is my answer is on js file
</pre>
<p>Pros and Cons about arrays</p>
<strong>Pros</strong>
<ul>
<li>Fast Lookup</li>
<li>Fash Push/Pop</li>
<li>Ordered</li>
</ul>
<strong>Cons</strong>
<ul>
<li>Slow Inserts</li>
<li>Slow Deletes</li>
<li>fixed size * <sub>if using static arrays</sub></li>
</ul>
<hr /><strong>Hash Tables</strong>
<p>Hash tables are fast interms of:</p>
<ul>
<li>Lookups</li>
<li>Insert</li>
<li>Delete</li>
<li>Update</li>
</ul>
<p>Hash in javascript are just objects</p>
<pre>//example
 const user = {
 age: 56,
 name: 'Sand king',
 magic: true,
 melee: true
 }
 //lookups
 user.name
 //insert
 user.sing = "lalala"
 //delete
 delete user.sing
 //update
 user.age = 100;
</pre>
<p>But the problem about Hash tables is that the collision, it may overide some place in memory, but there are some ways to avoid it.</p>
<p>Hash Tables are much more faster than arrays.</p>
</div>
<div>
<div>May 29, 2019
<h6>Day 4</h6>
</div>
<p>Google Question</p>
<p>Given an array tell me what the first recuring character</p>
<pre>// Given Array = [2,5,1,2,3,5,1,2,4]
 //It should return 2
 //Given Array = [2,1,1,2,3,5,1,2,4]
 //It should return 1
 // Given Array = [2,3,4,5]
 //It should return undefined
 // my answer was on the js file day 4
 </pre>
<p>Another idea about using objects or hashtable</p>
<pre>//when using a number as a key you will access it like an array
 const obj = {
 1 : "one",
 2 : "two",
 3 : "three"
 }
 obj[1]
 output:
 "one"
 //See the different about string key and number key on how to access them ?
 const obj1 = {
 one : "1",
 two : "2",
 three : "3"
 }
 obj1.one
 output:
 "1"
 </pre>
</div>
</div>
<p>The Rubik's Cube seems to be an impossible puzzle but it's <a href="https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/" target="_blank" rel="nofollow noopener">easy to solve</a> using just a few algorithms.</p>
