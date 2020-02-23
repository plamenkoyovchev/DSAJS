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
            this.stack2.push(this.stack1.pop());
        }

        const peek = this.stack2.peek();

        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop());
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
            const node = this.stack1.pop();
            return node;
        }

        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }

        const node = this.stack2.pop();

        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop());
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