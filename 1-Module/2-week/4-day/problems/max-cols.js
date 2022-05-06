function maxColumn(matrix) {
    //how do we traverse columns first then rows?
    //find a way to represent columns and rows
    let colAmount = matrix[0].length; //cols = for example below it will be 3.
    let rowAmount = matrix.length; //rows = for exmaple below it will also be 3.  
    
    let result = [];

    //first traverse the columns NOT rows
    for(let col=0; col<colAmount; col++){
        console.log("-------current col-------:", col);
        //inner for loop traverses through the rows
        let currentBiggestInCol= -Infinity;
        for(let row=0; row<rowAmount; row++){
            let number = matrix[row][col]
            console.log("item in col:", number)
            if(number > currentBiggestInCol){
                //make currentBigest in COLUMN to the new number
                currentBiggestInCol = number;
            }
        }
        //at the end of the column, push currengBiggestInCol into our result.
        result.push(currentBiggestInCol)
    }
    return result;
}

//result = [12, 19, 21 ]
matrix = [
    [5, 9, 21],
    [9, 19, 6],
    [12, 14, 15]
]

console.log(maxColumn(matrix)); // [12, 19, 21]

