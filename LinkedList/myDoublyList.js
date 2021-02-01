//Linked List : 10-->5-->16
//Linked List - prepend : 1-->10-->5-->16
//Linked List - insert : 1-->10-->99-->5-->16

class DoublyList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const pre = this.findIndex(index - 1);
    const post = pre.next;
    pre.next = newNode;
    newNode.prev = pre;
    newNode.next = post;
    post.prev = newNode;
    this.length++;
    return this.printList();
  }
  remove(index) {
    //if index is the head
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index >= this.length) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      //if index is the tail
      // //if index anywhere else
      const pre = this.findIndex(index - 1);
      let target = pre.next;
      let post = target.next;
      pre.next = target.next;
      post.prev = target.prev;
    }
    this.length--;
    return this.printList();
  }
  findIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }
}

const myLinkedList = new DoublyList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(1, 99);
myLinkedList.remove(20);
console.log(myLinkedList);
