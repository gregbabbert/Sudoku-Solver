const firstRow = [1,2,3,4,5,6,7,8,9];
const secondRow = [9,1,2,3,4,5,6,7,8];
const thirdRow = [8,9,1,2,3,4,5,6,7];
const fourthRow = [7,8,9,1,2,3,4,5,6];
const fifthRow = [6,7,8,9,1,2,3,4,5];
const sixthRow = [5,6,7,8,9,1,2,3,4];
const seventhRow = [4,5,6,7,8,9,1,2,3];
const eightRow = [3,4,5,6,7,8,9,1,2];
const ninthRow = [2,3,4,5,6,7,8,9,1];

/*
const firstColumn = [1,2,3,4,5,6,7,8,9];
const secondColumn = [9,1,2,3,4,5,6,7,8];
const thirdColumn = [8,9,1,2,3,4,5,6,7];
const fourthColumn = [7,8,9,1,2,3,4,5,6];
const fifthColumn = [6,7,8,9,1,2,3,4,5];
const sixthColumn = [5,6,7,8,9,1,2,3,4];
const seventhRow = [4,5,6,7,8,9,1,2,3];
const eightRow = [3,4,5,6,7,8,9,1,2];
const ninthRow = [2,3,4,5,6,7,8,9,1]; */

let finished = false;
let i = 1;

while (!finished) {
    firstRow.forEach(element => {
        element = i;
        i += 1;
    })
    finished = true;
}

console.log(firstRow);
console.log(i.toString().length);