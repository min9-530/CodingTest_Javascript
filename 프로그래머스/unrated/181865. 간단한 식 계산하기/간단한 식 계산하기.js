function solution(binomial) {
    const [a,op,b] = binomial.split(' ')
    const result = {
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
        '*': (a,b)=>a*b
    }
    return result[op](Number(a),Number(b))
}