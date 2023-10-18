function solution(n) {
    let res = 0;
    if(n % 2 === 0){
        for(i = 0; i <= n; i++) {
            if(i % 2 == 0) {
                res += i*i
            }
        }
    }else{
        for(i = 0; i <= n; i++) {
            if(i % 2 !== 0) {
                res += i
            }
        }
    }
    return res;
}