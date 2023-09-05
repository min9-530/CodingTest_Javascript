function solution(num_list) {
    const answer = (num) => num < 0;
    return num_list.findIndex(answer);
}