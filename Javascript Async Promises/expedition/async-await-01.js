async function generator(val) {
  let generated=0
   for(let i = 0; i < val; i++) {
     generated++
   }
   return Promise.resolve(generated)
}
async function double(value){
  let val = await generator(value)
  val += val 
  return val 
}
for(let i = 0; i < 8000; i++) {
  console.log(i, "////////")
}
double(800000000).then(data => console.log("Answer is: ", data))