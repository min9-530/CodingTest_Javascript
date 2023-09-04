function solution(start, end_num) {
    var res = [];
    for (i = start; i >= end_num; i--) 
        res.push(i);
    return res
}