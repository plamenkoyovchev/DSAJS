const Node = require('./Node');

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    toArray() {
        const array = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}

module.exports = LinkedList;