function solution(n) {
    let a = []
    while(n > 0) {
        a.push(n);
        if(n === 1)
            break;
        else if(n % 2 === 0)
            n = n / 2;
        else if(n % 2 === 1)
            n = 3 * n + 1;
    }
    return a
}