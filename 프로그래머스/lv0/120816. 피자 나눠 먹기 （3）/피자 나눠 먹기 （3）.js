function solution(slice, n) {
    var pizza = 1;
    return n/slice < 1 ? 1 : Math.ceil(pizza * n/slice);
    console.log(n/slice)
}