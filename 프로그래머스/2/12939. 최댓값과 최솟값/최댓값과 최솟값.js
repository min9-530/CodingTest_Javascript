function solution(s) {
    let answer = [];
    let Sorting = s.split(" ").sort((a,b) => a - b);
    
    return Sorting[0] +" "+ Sorting[Sorting.length - 1];
}