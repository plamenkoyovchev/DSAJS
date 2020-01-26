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

    insert(index, value) {
        const newNode = new Node(value);
        if (index <= 0) {
            this.prepend(newNode);
            return;
        }

        if (index >= this.length) {
            this.append(newNode);
            return;
        }

        const leader = this.findLeader(index - 1);
        const nodeToMoveForward = leader.next;
        leader.next = newNode;
        newNode.next = nodeToMoveForward;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return;
        }

        if (index === 0) {
            const unwantedNode = this.head;
            this.head = unwantedNode.next;
            return;
        }

        const leader = this.findLeader(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
    }

    findLeader(index) {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }

            counter++;
            currentNode = currentNode.next;
        }
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