class StackWithArray {
    constructor() {
        this.data = [];
    }

    pop() {
        return this.data.pop();
    }

    push(value) {
        this.data.push(value);
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    empty() {
        return this.data.length === 0;
    }
}

module.exports = StackWithArray;