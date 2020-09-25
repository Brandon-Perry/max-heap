// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  for (let i = 1; i < array.length; i++) {
    let val = array[i]
    let leftChild = array[i*2]
    let rightChild = array[i*2+1]

    if (leftChild === undefined) {
      if (rightChild > val) {
        return false
      }
    }
    else if (rightChild === undefined) {
      if (leftChild > val) {
        return false
      }
    }
    else if (leftChild > val || rightChild > val) {
      return false
    }
  }
    return true
}


module.exports = {
  isMaxHeap
};
