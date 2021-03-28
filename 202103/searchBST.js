/*
排序二叉树, 又称为二叉查找树. 它有着自己显著的特点:
    1. 首先一个节点左孩子的值, 一定小于它本身节点的值.
    2. 一个节点右孩子的值, 一定大于它本身节点的值.
    3. 左、右孩子(子树)也分别是排序二叉树.
*/ 

function Node(data) {
    this.data = data;
    this.right = null;
    this.left = null;
}
function searchBST() {
    this.root = null;

    var insertNode = function insertNode(rnode, nnode) {
        // 如果
        if (nnode.data < rnode.data) {
            rnode.left === null ? rnode.left = nnode : insertNode(rnode.left, nnode);
        } else {
            rnode.right === null ? rnode.right = nnode : insertNode(rnode.right, nnode);
        }
    }

    this.insert = function (data) {
        let nnode = new Node(data);
        this.root === null ? this.root = nnode : insertNode(this.root, nnode);
    }

    // 中序遍历
    this.middleTraverse = function middleTraverse(node, callbacks) {
        if (node !== null) {
            middleTraverse(node.left, callbacks);
            callbacks(node.data);
            middleTraverse(node.right, callbacks);
        }
    }

    // 查找
    this.findVal = function findVal(node, value) {
        if (node !== null) {
            if (value > node.data) {
                return findVal(node.right, value);
            } else if (value < node.data) {
                return findVal(node.left, value);
            } else {
                return node;
            }
        } else {
            return -1;
        }
    }
}

var list = [62, 88, 58, 47, 35, 73, 51, 99, 37, 93];
let tree = new searchBST();

// 构造二叉排序树
list.forEach(item => {
    tree.insert(item);
})

// 遍历二叉排序树
tree.middleTraverse(tree.root, function (data) {
    // console.log(data);
});

// 查找二叉排序树
let fnode = tree.findVal(tree.root, 47);
console.log(fnode);



/* References: 
 * https://anran758.github.io/blog/2018/01/10/%E6%B7%B1%E5%85%A5%E5%AD%A6%E4%B9%A0%E4%B9%8B%E6%8E%92%E5%BA%8F%E4%BA%8C%E5%8F%89%E6%A0%91/
 */