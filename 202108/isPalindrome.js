/**
 * @param {number} x
 * @return {boolean}
 * @desc 判断是否为回文数字
 */
 var isPalindrome = function(x) {
    x = String(x);
    let length = x.length;
    let prefix,suffix,revSuffix;
    if(length % 2 ===0){ // 偶数
        prefix = x.slice(0,length/2);
        suffix = x.slice(length/2);
    }else {
        prefix = x.slice(0,(length-1)/2);
        suffix = x.slice((length+1)/2);
    }
    
    revSuffix = suffix.split('').reverse().join('');
    console.log(prefix,suffix,revSuffix);
    if(prefix === revSuffix){
        return true;
    }else{
        return false;
    }
};

console.log(isPalindrome(1001));