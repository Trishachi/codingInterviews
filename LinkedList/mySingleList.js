//Linked List : 10-->5-->16
//Linked List - prepend : 1-->10-->5-->16
//Linked List - insert : 1-->10-->99-->5-->16

class LinkedList {
  constructor(value) {
    //initial value of list
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1; //optional
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
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
    };
    const pre = this.findIndex(index - 1);
    const post = pre.next;
    pre.next = newNode;
    newNode.next = post;
    this.length++;
    return this.printList();
  }
  remove(index) {
    //if index is the head
    if (index === 0) {
      this.head = this.head.next;
    } else if (index >= this.length) {
      let prev = this.head;
      let node = this.head.next;
      while (node.next) {
        prev = node;
        node = node.next;
      }
      prev.next = null;
    } else {
      //if index is the tail
      // //if index anywhere else
      const pre = this.findIndex(index - 1);
      let target = pre.next;
      pre.next = target.next;
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

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
      // console.log(temp);
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(1, 99);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.reverse();
console.log(myLinkedList);
