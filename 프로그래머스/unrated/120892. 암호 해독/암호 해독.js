function solution(cipher, code) {
    let answer = [];
    let ciparr = cipher.split("");
    for(i = 1; i < cipher.length; i++) {
        if(code === 1){
            answer = ciparr
        }
        else if(code * i <= cipher.length){
            answer.push(ciparr[code * i - 1]);
        }
        else{
            break;
        }
    }
    return answer.join("");
}