function solution(x, n) {
    let sum = [];
    let i = 1;
    while(i <= n){
        sum.push(x*i);
        i++;
    }
    return sum;
}