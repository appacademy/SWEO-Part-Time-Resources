const randomNumberArr = (max) => {
    const res = new Array(); 

    for (let i = 0; i < max; i++) { // Time Complexity Linear O(n)
        const randomNumber = Math.floor(Math.random() * Math.floor(max));

        res.push(randomNumber); // push method is constant complexity Average O(1) Worst case scenario O(n) If a JS array runs into a point where it needs more memory 
    }

    return res; // Space complexity of O(n) Linear
};

const jsPush = (arr) => { 
    const res = new Array();  
    const n = arr.length;

    for (let i = 0; i < n; i++) { // Time Complexity Linear O(n)
        res.push(arr[i]); // push method is constant complexity Average O(1) Worst case scenario O(n) If a JS array runs into a point where it needs more memory 
    }

    return res; // Space complexity of O(n) Linear
};


function popTest(arr) {
const n = arr.length;

for (let i = 0 ; i < n ; i++) {
    arr.pop(); // push method is constant complexity Average O(1) 
}
    
return arr;
}
  

// filter, map, reduce, and every O(n)

function unshiftTest(n) {  // The entire function is quadratic, because unshift has a linear time, and we are unshifting inside a linear for loop making O(n^2)
const arr = [1]; 

for (let i = 0; i < n; i++) { // the for loop itself O(n)
    // Any time you use shift or unshift inside a for loop that makes the time complexity Quadratic O(n^2)
    // for(let i = 0; i < arr.length; i++){
    //     arr2 = []
    //     if(i === 0){

    //         arr2.push('My new value')
    //     }else{
    //         arr2.push(arr[i])
    //     }

    // }
    // arr.unshift(i); // Each one of these actions are O(n) themselves 
    arr = [i, ...arr]
}

    return arr; // I think the space complexity here is quadratic

}


function shiftTest(arr) {
const n = arr.length;

for (let i = 0 ; i < n ; i++) {// the for loop itself O(n)
    // Any time you use shift or unshift inside a for loop that makes the time complexity Quadratic O(n^2)
    arr.shift(); // Each one of these actions are O(n) themselves 
}

return arr;
}

