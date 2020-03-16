class LinkedListNode {
  constructor(...arguments) {
    this.numOfRows = numOfRows;
  }

  get rows() {
    return getPascalsTriangle(this.numOfRows);
  }
}
