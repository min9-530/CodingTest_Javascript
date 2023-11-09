function solution(n) {
    let a = 0;
    for(i = 1; i <= n; i++){
        if(n % i === 0){
            a++;
        }
    }
    return a;
}