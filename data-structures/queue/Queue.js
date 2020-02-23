const Node = require('../linked-list/Node');

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.first === null) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
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

        const node = this.first;
        this.first = this.first.next;
        this.length--;

        return node;
    }

    empty() {
        return this.length === 0;
    }
}

module.exports = Queue;