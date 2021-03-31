// 深拷贝，因为JSON.parse(JSON.stringfy())不能解析正则
function deepCopy(source) {
    if (typeof source !== 'object') return source;
    
    let o = Array.isArray(source) ? [] : {};

    Object.keys(source).forEach(key => {
        o[key] = deepCopy(target[key])
    })
    return o;
}

// test--------------

let arr = [1, 2, 3, [4, 5]];
let obj = {
    x: 2,
    name: {
        Q: 3,
        P: 0
    }
}
let arrx = deepCopy(arr);
console.log(arrx, arrx[3] === arr[3]);

let objx = deepCopy(obj);
console.log(objx, objx.name === obj.name);