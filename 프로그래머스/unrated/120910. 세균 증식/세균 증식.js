function solution(n, t) {
    let a = n;
    for(i = 0; i <= t; i++){
        a = a*2;
    }
    return a/2;
}