const Node = require('../linked-list/Node');

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.last;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.first === null) {
            this.first = this.last = newNode;
        } else {
            const refToLast = this.last;
            this.last = newNode;
            this.last.next = refToLast;
        }

        this.length++;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }

        if (this.first === this.last) {
            const node = this.first;
            this.first = this.last = null;
            this.length--;

            return node;
        }

        let currentNode = this.last;
        while (currentNode && currentNode.next !== this.first) {
            currentNode = currentNode.next;
        }

        const node = this.first;
        this.first = currentNode;
        this.length--;

        return node;
    }

    empty() {
        return this.length === 0;
    }
}

module.exports = Queue;