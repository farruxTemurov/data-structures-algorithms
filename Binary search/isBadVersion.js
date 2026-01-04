// 278. First Bad Version

const badVersion = 4;
const isBadVersion = function (n) {
    return n >= badVersion;
}

const solution = function (isBadVersion) {
    return function (n) {
        let = 0, right = n;

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
}