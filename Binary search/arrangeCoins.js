// 441. Arranging Coins
// 1 + 2 + ... + k = k(k+1)/2 -> sum of first k numbers formula

const arrangeCoins = function (n) {
    let left = 1, right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const coins = mid * (mid + 1) / 2; // this formula: k(k+1)/2

        if (coins === n) {
            return mid;
        } else if (coins < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};

const n = 5;
console.log(arrangeCoins(n)); // output: 2 because we can only build 2 rows of 
// stairs with 5 coins, to build the 3rd row, we would need 6 coins.