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
            this.top.next = holdingPointer;
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

        const nodeToPop = this.top;
        this.top = this.top.next;

        this.length--;

        return nodeToPop;
    }

    empty() {
        return this.length === 0;
    }
}

module.exports = Stack;