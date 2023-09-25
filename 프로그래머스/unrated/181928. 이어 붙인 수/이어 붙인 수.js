function solution(num_list) {
    let a = [];
    let b = [];
    for(let i=0; i < num_list.length; i++) {
        if(num_list[i] % 2 == 1) {
            a.push(num_list[i]);
        }
        if(num_list[i] % 2 == 0) {
            b.push(num_list[i]);
        }
    }
    return (Number(a.join(""))+Number(b.join("")));
}