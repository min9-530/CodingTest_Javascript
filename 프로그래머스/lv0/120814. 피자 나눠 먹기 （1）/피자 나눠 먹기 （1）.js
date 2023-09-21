function solution(n) {
    var pizza = 1;
    return n/7 < 1 ? 1 : Math.ceil(pizza * n/7);
}