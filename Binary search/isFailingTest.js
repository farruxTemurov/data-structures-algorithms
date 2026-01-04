/* The returned function should take n → total number of tests.
It should return the test number of the first failing test.
Use binary search to minimize calls to isFailing. */

const failingTest = 6;
const isFailing = function (n) {
    return n >= failingTest;
};

var firstFailingTest = function (isFailing) {

    return function (n) {
        let left = 1, right = n;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (isFailing(mid)) {
                // first failing test could be mid or before
                right = mid;
            } else {
                // mid passes, so first failing test is after
                left = mid + 1;
            }
        }
        return left;
    }
};

const solutionFunc = firstFailingTest(isFailing);
console.log(solutionFunc(10)); // output: 6
