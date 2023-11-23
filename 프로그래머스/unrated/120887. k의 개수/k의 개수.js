function solution(i, j, k) {
    let o = 0;
    for (l = i; l <= j; l++){
         o += String(l).split("").filter(a=>a===String(k)).length
    }
    return o;
}