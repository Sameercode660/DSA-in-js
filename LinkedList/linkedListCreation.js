class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  startInsert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteFromStart() {
    if (!this.head) {
      console.log('List is empty')
      return;
    }

    let current = this.head;
    this.head = this.head.next;
    current = null;
  }

  // delete from end

  deleteFromEnd() {
    if(!this.head) {
        console.log('List is Empty')
        return;
    }
    let current = this.head;
    while(current.head.next) {
        this.head = this.head.next;
    }

    current.head.next = null;
    
  }

  //   display the linked list

  display() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// usage
let list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.display();
console.log("Delete");
list.deleteFromEnd()
list.display()