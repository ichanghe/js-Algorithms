let bst = {
  value: 5,
  left: {
    value: 4,
    left: null,
    right: null,
  },
  right: {
    value: 6,
    left: null,
    right: null,
  },
};
// 前序遍历
function preOrderTraverse(node) {
  if (node == null) return;
  console.log(node.value);
  preOrderTraverse(node.left);
  preOrderTraverse(node.right);
}
// 中序遍历
function inOrderTraverse(node) {
  if (node == null) return;
  inOrderTraverse(node.left);
  console.log(node.value);
  inOrderTraverse(node.right);
}

// 后序遍历
function postOrderTraverse(node) {
  if (node == null) return;
  postOrderTraverse(node.left);
  postOrderTraverse(node.right);
  console.log(node.value);
}
inOrderTraverse(bst);
