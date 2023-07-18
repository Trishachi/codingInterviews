// create a class to implement an array
class MyArray {
  //Array initial function
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //////////Array Methods ///////////////////////////

  //Access Data from a specified index
  get(index) {
    return this.data[index];
  }

  //Push Data - Add item to end of array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //Pop Data - Remove last item in array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //Delete Data - Delete data at index
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  //Different method for shifting the indexes after a change -
  //obeying "separation of concerns rule"
    shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("Hello");
newArray.push("World");
newArray.push("!!");
newArray.push("Howdy");
newArray.push("Today");
newArray.push("!!");
newArray.pop();
newArray.delete(2);
console.log(newArray);
