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
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            this.prepend(value);
        } else if (index === this.length - 1) {
            this.append(value);
        } else {
            const newNode = new Node(value);
            const leader = this.findLeader(index - 1);
            const nodeToMoveForward = leader.next;
            leader.next = newNode;
            newNode.next = nodeToMoveForward;

            this.length++;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return;
        }

        if (index === 0) {
            const unwantedNode = this.head;
            this.head = unwantedNode.next;
            this.length--;
            return;
        }

        const leader = this.findLeader(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;

        this.length--;
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