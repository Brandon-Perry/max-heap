class MaxHeap {
  constructor() {
    this.array = [null];

  }

  insert(value) {
    this.array.push(value);
    this.siftUp(this.array.length-1);
  }

  siftUp(idx) {
    if (idx === 1) return

    let parentIdx = this.getParent(idx);
    if (this.array[idx] > this.array[parentIdx]) {
      [ this.array[idx], this.array[parentIdx]] = [ this.array[parentIdx], this.array[idx] ];
      this.siftUp(parentIdx);
    }
  }

  getParent(idx) {
    let parentIdx = Math.floor(idx/2)
    return parentIdx
  }

  getLeftChild(idx) {
    let leftChildIdx = idx*2
    return leftChildIdx;
  }

  getRightChild(idx) {
    let rightChildIdx = idx*2+1
    return rightChildIdx
  }

  deleteMax() {
    
    let max = this.array[1];
    if (max === undefined) {
      return null
    } else if (this.array.length === 2) {
      return this.array.pop()
    }

    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  siftDown(idx) {
    let leftIdx = idx*2;
    let rightIdx = idx*2 + 1;
    let leftValue = this.array[leftIdx];
    let rightValue = this.array[rightIdx];
    let val = this.array[idx];

    if (leftValue === undefined) leftValue = -Infinity;
    if (rightValue === undefined) rightValue = -Infinity;
    if (val > leftValue && val > rightValue) return;

    let swapIdx = (leftValue > rightValue) ? leftIdx : rightIdx;

    [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]];

    this.siftDown(swapIdx);
  }
}

module.exports = {
  MaxHeap
};
