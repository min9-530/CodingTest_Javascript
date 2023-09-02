function solution(arr, n) {
    return (arr.length % 2 === 1) ? arr.map((newArr, index) => index % 2 === 0 ? newArr + n : newArr) : arr.map((newArr, index) => index % 2 === 1 ? newArr + n : newArr)
}