const Stack = require('../../stack/Stack');

class QueueWithStack {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    peek() {
        if (this.stack1.empty()) {
            return null;
        }

        if (this.stack2.length === 1) {
            return this.stack1.peek();
        }

        while (this.stack1.peek()) {
            let currentNode = this.stack1.pop();
            this.stack2.push(currentNode.value);
        }

        const peek = this.stack2.peek();

        while (this.stack2.peek()) {
            let currentNode = this.stack2.pop();
            this.stack1.push(currentNode.value);
        }

        return peek;
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack1.empty()) {
            return null;
        }

        if (this.stack1.length === 1) {
            return this.stack1.pop();
        }

        while (this.stack1.peek()) {
            let currentNode = this.stack1.pop();
            this.stack2.push(currentNode.value);
        }

        const node = this.stack2.pop();

        while (this.stack2.peek()) {
            let currentNode = this.stack2.pop();
            this.stack1.push(currentNode.value);
        }

        return node;
    }

    empty() {
        return this.stack1.empty();
    }

    toArray() {
        const array = [];
        while (!this.stack1.empty()) {
            array.push(this.stack1.pop());
        }

        const result = array.map(n => n.value);
        while (array.length !== 0) {
            this.stack1.push(array.pop());
        }

        return result;
    }
}

module.exports = QueueWithStack;