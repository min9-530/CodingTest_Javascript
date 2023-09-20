function solution(num_list) {
    const div = num_list.filter((n) => n % 2 === 0);
    const divi = num_list.filter((n) => n % 2 === 1);
    let res = []
    res.push(div.length)
    res.push(divi.length)
    return res;
}