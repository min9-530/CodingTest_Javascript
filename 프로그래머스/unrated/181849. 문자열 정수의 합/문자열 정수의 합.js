function solution(num_str) {
    return num_str.split("").reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0);
;
}