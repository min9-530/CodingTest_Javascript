function solution(a, b, c) {
    if(a===b && b===c)
        return (a+b+c)*(a*a+b*b+c*c)*(a*a*a+b*b*b+c*c*c);
    else if(a == b && b !=c || a == c && c !=b || b==c && b!=a)
        return (a+b+c)*(a*a+b*b+c*c);
    else
        return a+b+c;
}