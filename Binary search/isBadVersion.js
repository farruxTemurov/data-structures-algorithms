// 278. First Bad Version

const badVersion = 4;
const isBadVersion = function (n) {
    return n >= badVersion;
};

const solution = function (isBadVersion) {
    return function (n) {
        let left = 0, right = n;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
};

const solutionFunc = solution(isBadVersion); // returns the inner function

console.log(solutionFunc(5)); // should output 4