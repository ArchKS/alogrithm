// 分治算法： 汉诺塔问题
// 1 如果有一个盘 A->C   A盘移到C盘
// 2 如果有N>=2个盘，我们总可以看作是两个盘 1. 最下面的盘 2. 上面的盘
//     1) 先把最上面的盘 A->B
//     2) 再把最下面的盘 A->C
//     3) 最后把 B->C



function hanoi(num, a, b, c) {
    if (num === 1) {
        console.log(`第${num} ${a} -> ${c}`);
    } else {
        // 如果有N>=2个盘，我们总可以看作是两个盘 1. 最下面的盘 2. 上面的盘
        // 先把最上面的盘 A->B
        hanoi(num - 1, a, c, b);
        // 再把最下面的盘 A->C
        console.log(`第${num} ${a} -> ${c}`);
        // 最后把 B->C
        hanoi(num - 1, b, a, c);
    }
}

hanoi(3, 'A', 'B', 'C');




// https://www.hannuota.cn/
// https://www.bilibili.com/video/BV1E4411H73v?p=155