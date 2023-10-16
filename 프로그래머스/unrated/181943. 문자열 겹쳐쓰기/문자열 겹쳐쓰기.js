function solution(my_string, overwrite_string, s) {
    const NewArray = my_string.split("");
    const OldArray = NewArray.splice(s, overwrite_string.split("").length, overwrite_string.split(""));
    return NewArray.flat().join("");
}