function solution(my_string) {
    let mo = ["a", "e", "i", "o", "u"];
    return [...my_string].filter(x => !mo.includes(x)).join("");
}