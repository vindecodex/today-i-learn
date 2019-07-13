// DAY3
// This is my answer on Day3
// const arr1 = [0, 3, 4,31]
// const arr2 = [4,6, 30]

// function mergeSortedArrays(list1,list2){
//   const arrays = list1.concat(list2);
//   return sortArray(arrays);
// }
// function sortArray(arr){
//   const arrays = arr
//   const length = arr.length
//   let b,s = 0;
//   for(let i = 0;i <length;i++){
//     for(let j = 0;j <length;j++){
//       if(arrays[j] > arrays[j+1]){
// b = arrays[j]
// s = arrays[j+1]
//         arrays.splice(j,1,s)
//         arrays.splice(j+1,1,b)
//       }
//     }
//   }
//   return arrays;
// }
// mergeSortedArrays(arr1,arr2)
// This is my answer on Day3
// DAY3


// DAY4
// (function(){
//     const results = [];
//     const givenArray = [2,1,1,2,3,5,1,2,4];
//   function firstRepeatingNumber(arr){
//     const array = arr;
//     const length = array.length;
//     let rounds = 0;
//     let found = false;
//     for(let i = 0; i < length - 1; i++){
//       for(let j = 1 + i; j < length; j++){
//         if(!found){
//            rounds++;
//            if(array[i] === array[j] && i != j){
//           found = true;
//         }
//       }else{
//         break;
//       }  
//     }
//       results.push({"iteration" : i, "moves" : rounds, "found" : found});
//       found = false;
//       rounds = 0;
//     }
//   }
  
//   function getFound(results){
//     let resultFound = [];
//     for(let i = 0; i < results.length; i++){
//       if(results[i].found){
//         resultFound.push(results[i]);
//       }
//     }
//     return resultFound;
//   }
  
//   function answer(fn){
//     if(fn.length){
//     const arr = fn;
//     let lowest = arr[0].iteration + arr[0].moves;
//     let index = 0;
//     for(let i = 0;i < arr.length; i++){
//       if(arr.length > 1){
//         if(arr[i].iteration + arr[i].moves < lowest){
//         lowest = arr[i].iteration + arr[i].moves;
//         index = arr[i].iteration;
//         }
//       }else{
//         index = arr[i].iteration;
//       }
//     }
//     console.log(results[index]);
//     console.log("Answer :", givenArray[index]);
//     }else{
//     console.log(undefined);
//     }
//     }
  
//   firstRepeatingNumber(givenArray);
//   answer(getFound(results));
//   })();


// Answer from andrie using hashtables
// (function(){
//     function firstRecuringCharacter(input){
//       const map = {}
//       for(let i = 0; i < input.length; i++){
//         if(map[input[i]] !== undefined){
//           return input[i];
//         }else{
//           map[input[i]] = i;
//         }
//       }
//       return undefined;
//     } 
//     return firstRecuringCharacter([2,1,1,2,3,5,1,2,4]); 
//   })();
// Answer from andrie using hashtables
//   DAY 4