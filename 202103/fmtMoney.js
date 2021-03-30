// 格式化1000000000.12 => 1,000,000,000.12 
const money = 1000000000.12;

// 方法一：使用toLocaleString
function fmtMoneny1(money) {
    return money.toLocaleString('en-US')
}


// 方法二：使用Intl
function fmtMoneny2(money) {
    return new Intl.NumberFormat().format(money)
}


// 方法三：正则
function fmtMoneny3(money) {
    return String(money).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}


// 方法四：分割
function fmtMoneny4(money) {
    money = String(money).split('').reverse().join('');
    let flag = money.indexOf('.') !== -1 ? true : false; //   true有小数,false没小数
    let res = [];           // 初始化栈
    let index = null;       // 初始化整数下标
    for (let v of money) {
        if (v === '.') {
            flag = false // 在.之后就全是整数了
            res.push(v)  // 将.压入栈中
            index = 0;   // 打开整数下标 
            continue;    // 跳过此次循环
        }
        // 有小数 直接入栈
        if (flag) {
            res.push(v)
            // 没有小数 按3取间隔
        } else if (index !== null && flag) {
            res.push(v)
            index++;
            // 如果遍历到了第三个，则同时把','加入栈中
            index % 3 === 0 ? res.push(',') : null;
        }
    }
    return res.reverse().join('')
}

console.log(fmtMoneny3(money));


// References:
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl
// https://www.haorooms.com/post/js_qian_huobi_gs