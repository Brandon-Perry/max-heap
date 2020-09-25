class MaxHeap {
  constructor() {
    this.array = null;

  }

  insert(value) {
    this.array.push(value);
    this.siftUp(this.array.length-1);
  }

  siftUp(idx) {
    if (idx === 1) return

    let parentIdx = Math.floor(idx/2);
    if (this.array[idx] > this.array[parentIdx]) {
      [ this.array[idx], this.array[parentIdx]] = [ this.array[parentIdx], this.array[idx] ];
      this.siftUp(parentIdx);
    }
  }

  deleteMax() {
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftdown(1);
    return max;
  }

  siftdown(idx) {
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

    this.siftdown(swapIdx);
  }
}

module.exports = {
  MaxHeap
};
