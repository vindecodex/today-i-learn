// It accepts value to be count
async function generator(val) {
  let generated=0
   for(let i = 0; i < val; i++) {
     // it increments and used to be returned
     generated++
   }
  // it will took time to return for value if big
   return Promise.resolve(generated)
}
async function double(value){
  // val will use the returned value of our async so we use await to pause and wait for the generator function to return a value
  let val = await generator(value)
  // I just double the val to: val + val as what the function name
  val += val 
  return val 
}
// I also did some synchronous task here
for(let i = 0; i < 8000; i++) {
  console.log(i, "////////")
}
// I pass big number to take time to process and also to make it look more realistic
double(800000000).then(data => console.log("Answer is: ", data))