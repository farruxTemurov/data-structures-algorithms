// 1351. Count Negative Numbers in a Sorted Matrix

const countNegatives = function (grid) {
    let negativeNums = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) { // if a number in row's column is negative
                negativeNums.push(grid[i][j]);
            }
        }
    }
    return negativeNums.length;
}

let grid =
    [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];
console.log(countNegatives(grid));