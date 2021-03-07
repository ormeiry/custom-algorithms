// Given a root obj of a tree, it will sum up all the values of
// all the nodes in the tree (left and right). It's a recursive function.

function sumOfTree(nodeObj) {
  if (!nodeObj) return 0;
  return nodeObj.val + sumOfTree(nodeObj.left) + sumOfTree(nodeObj.right);
}

const tree = {
  val: 10,
  left: {
    val: 12,
    right: {
      val: 2,
      left: {
        val: 5,
      },
      right: {
        val: 2,
      },
    },
  },
  right: {
    val: 2,
    left: {
      val: 12,
      left: {
        val: 12,
      },
      right: {
        val: 2,
        left: {
          val: 10,
        },
        right: {
          val: 10,
        },
      },
    },
    right: {
      val: 15,
    },
  },
};

console.log(sumOfTree(tree));
