// This is for the Day 5 Call Stack and Memory Heap
// function a(num){
//     return num * num;
// }
// function b(num){
//     debugger;
//     return a(num) + 2;
// }
// b(5);
// This is for the Day 5 Call Stack and Memory Heap

// Comparison from above and below

// function a(){
//     function b(){
//         function c(){
//             console.log("A");
//         }
//         c();
//     }
//     b();
// }
// a();

// This part is separting the callstack of each function
// function b(){
//     debugger;
//     return function a(num){ //before this runs b() will be pop out on the call stack why ? see A> explanations
//         return num * num + 2;
//     };
// }
// choose from below on how will you call the function a()
// b()(5);// me and below were doing the same thing on call stack

// const runn = b();//if uncomment me, uncomment runn(5) also
// runn(5);

// Explanations
// A. As you can see on return on function b() function a was not invoke but someone is invoking him from the outside of the function b(),
// what happens in the return of function b was it is just declaring a function not invoking it that is why function b was pop out to the call stack because his job was done. and from the outside of the function someone is invoking a() and it will be added to the callstack. So it means that the function a was invoke from the global execution context not on b()

// ===================================================================

// This is for the closure part
// function a(){
//     debugger;
//     let grandpa = "grandpa"
//     return function b(){
//       let father = "father"
//       return function c(){
//         let son = "son"
//         return `${grandpa} > ${father} > ${son}`
//       }
//     }
//   }
//   a()()();
//   This is for the closure part

// ===================================================================

// This part is for the Amazon Shopping Cart
// This is my own answer
// The main solution of this is on the page
// @TODO
// Add items to cart
// Add 3% tax to item in cart
// Buy Item: cart --> purchases
// Empty Cart

// Uncomment Starting From Below
// const user = {
//     name: 'Vindecode',
//     active: true,
//     cart: [],
//     purchased: [],
//     activityLog: [],
//     payment: 0
// }

// const items = [
//     {
//         name: 'Bag',
//         price: 1200
//     },
//     {
//         name: 'Car',
//         price: 3000
//     }
// ]

// const addToCart = (item) => {
//     user.cart.push(item);
//     user.activityLog.push('item ' + item + ' was added on the cart');
//     return function addTax(){
//         for(let i in items){
//             if(item === items[i].name){
//                 user.payment += (items[i].price + (items[i].price * 0.03))
//                 return (items[i].price + (items[i].price * 0.03))
//             }
//         }
//     }() //i added this so to avoid doing double () when we run addToCart function
// }

// const purchaseItem = () => {
//     user.purchased = user.cart
//     user.cart = []
//     user.payment = 0
//     user.activityLog.push('purchased items on cart')
//     user.activityLog.push('Open for new Transasction')
//     return user.purchased
// }
// Uncomment starting From Above

// ===================================================================

// This is the main solution of the Amazon Shopping Cart
// Amazon Shopping

//Implement a cart feature:
//1. Add Items to cart.
//2. Add 3% tax to item in cart
//3. Buy item: cart --> purhaces
//4. Empty Cart

//Bonus
// Allow Refunds
// Track user or user log

// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// }

// //this solution applies pure functions, Compose
// const compose = (f,g) => (...args) =>  f(g(...args));
// purchaseItem(
//     emptyCart,
//     buyItem,
//     applyTaxToItems,
//     addItemToCart
// )(user, {name: 'laptop', price: 200})

// let amazonHistory = []

// function purchaseItem(...fns) { 
//     return fns.reduce(compose) 
// }

// //this is a pure function
// function addItemToCart(user,item) {
//     amazonHistory.push(user)
//     const updateCart = user.cart.concat([item])
//     return Object.assign({},user, {cart: updateCart})
// }

// function applyTaxToItems(user){
//     amazonHistory.push(user)
//     const {cart} = user;
//     const taxRate = 1.3;
//     const updatedCart = cart.map(item => {
//         return{
//             name: item.name,
//             price: item.price * taxRate
//         }
//     })
//     return Object.assign({},user,{cart: updatedCart})
// }


// function buyItem(user) {
//     amazonHistory.push(user)
//     return Object.assign({},user,{purchases: user.cart})
// }

// function emptyCart(user) {
//     amazonHistory.push(user)
//     return Object.assign({},user,{cart: []})
// }
// ===================================================================