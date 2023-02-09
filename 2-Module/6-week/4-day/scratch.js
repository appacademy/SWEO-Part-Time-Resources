const matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

function getNeighbors(start, matrix) {

}

getNeighbors([2,2], matrix) // returns [ [1,2], [3,2], [1,2], [3,2] ]
getNeighbors([0,0], matrix) // returns [ [1,0], [0,1] ]
getNeighbors([2,0], matrix) // returns [ [1,0], [3,0], [2,1] ]