// 367. Valid Perfect Square
/*A perfect square is an integer that is the square of an integer. 
In other words, it is the product of some integer with itself*/

const isPerfectSquare = function (num) {
    if (num === 1) return true;

    let left = 2, right = Math.floor(num / 2);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (mid * mid === num) {
            return true;
        } else if (mid * mid < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};