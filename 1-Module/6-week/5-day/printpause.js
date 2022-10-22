function printAndPause(nums) {
    // Your code here
    //BASE Case
    if(!nums.length) return;

    //RECURSIVE STEP
    let shifted = nums.shift()

    console.log(shifted)

    setTimeout(() =>{
      //RECURSIVE CASE/CALL
      printAndPause(nums)

    }, shifted)

  }
