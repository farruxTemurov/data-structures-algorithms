const climbStairs = function (n) {
    if (n <= 3) return n;

    let prev1 = 1, prev2 = 2, cur = 0;

    for (int = 0; i < n; i++) {
        cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }
    return cur;
}