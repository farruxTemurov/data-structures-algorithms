// 374. Guess Number Higher or Lower
const pick = 42;
const guess = function (n) {
    if (n === pick) return 0;
    if (n > pick) return -1;
    return 1;
}

const guessNumber = function (n) {
    let left = 0, right = n;

    while (left <= right) { // should call fn guess for each num
        const mid = Math.floor((left + right) / 2);
        const res = guess(mid);

        if (res === 0) return mid;
        else if (res === -1) right = mid - 1;
        else left = mid + 1;
    }
};