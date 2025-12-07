// 436. Find Right Interval

const findRightInterval = function (intervals) {
    const starts = intervals.map((intv, i) => [intv[0], i]).sort((a, b) => a[0] - b[0]);
    const result = [];

    for (let [start, end] of intervals) {
        let l = 0, r = starts.length - 1, idx = -1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (starts[mid][0] >= end) {
                idx = starts[mid][1];
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        result.push(idx);
    }
    return result;
}

const intervals1 = [[1, 2]];
console.log(findRightInterval(intervals1)); // output -> -1
const intervals2 = [[3, 4], [2, 3], [1, 2]]
console.log(findRightInterval(intervals2)); // output -> [-1, 0, 1];

