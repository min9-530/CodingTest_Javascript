function solution(strArr) {
    let res = [];
    for (i = 0; i < strArr.length; i++) {
        if( i % 2 === 0){
            res.push(strArr[i].toLowerCase());
        } else {
            res.push(strArr[i].toUpperCase());
        }
    }
    return res;
}