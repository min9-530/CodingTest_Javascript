function solution(numbers, n) {
    let res = 0;
    for (i = 0; i < numbers.length; i++) {
        res+=numbers[i];
        if(res > n)
            return res;
    }
}