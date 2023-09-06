function solution(n, k) {
    var res = []
    for (i = 1; i <= n; i++)
        i % k === 0 ? res.push(i) : null
    return res
}