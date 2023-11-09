function solution(my_string, n) {
    let a = []
    let b = my_string.split("");
    for(i = 0; i < my_string.length; i++) 
        for(j = 0; j < n; j++)
            a.push(b[i]);
    return a.join("");
}