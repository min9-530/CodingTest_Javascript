function solution(n) {
    let sum = 0
    let i = 0;
    while(i <= n){
        if(n % i === 0){
            sum+=i;
        }
        i++;
    }
    return sum;
}