function hasTargetSum(array, target) {
  // Write your algorithm here
  //declare a function with two arguements.
  //iteriate through the array with a for loop
  //have a variable that will store result of the target subtract indexa after iteration
  //iteriate through with new results from first iteration
  //compare 
  
  for(let i = 0;i < array.length;i++){
    let total = target-array[i]
    for(let j =i + 1;j< array.length;j++){
      if(total === array[j])
        return true
      
    
      }
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
