// one dimensional array 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// two dimensional array 
let numbers2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9,]];

for (let i = 0; i < numbers2.length; i++) {
    for (let j = 0; j < numbers2[i].length; j++) {
        console.log(numbers2[i][j]);
    }
}

// three dimensional array 
let numbers3 = [[[1, 2, 3], [4, 5, 6]]];

for (let i = 0; i < numbers3.length; i++) {
    for (let j = 0; j < numbers3[i].length; j++) {
        for (let k = 0; k < numbers3[i][j].length; k++) {
            console.log(numbers3[i][j][k]);
        }
    }
}