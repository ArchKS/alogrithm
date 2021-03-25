// 利用递归求阶乘
// n! = n*(n-1)*(n-2)....*3*2*1;


/* 
阶乘 不需要向 fib数列那样用cache优化，阶乘每个f(n-1)都只执行一次
    f(10)
    f(9) * 10
    f(8) * 9
    f(7) * 8
*/

function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return factorial(n - 1) * n;
}

console.log(factorial(15));