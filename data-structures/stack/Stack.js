const Node = require('../linked-list/Node');

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            newNode.next = holdingPointer;
        }

        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const poppedNode = this.top;
        const topCandidate = this.top.next;
        this.top = topCandidate;

        this.length--;

        return poppedNode;
    }

    empty() {
        return this.length === 0;
    }
}

module.exports = Stack;