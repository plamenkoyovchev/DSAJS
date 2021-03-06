const Node = require('./Node');

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        const oldTail = this.tail;

        this.tail = newNode;
        newNode.prev = oldTail;
        oldTail.next = this.tail;

        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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
            let leader = this.findLeader(index - 1);
            let rightNode = leader.next;

            leader.next = newNode;
            newNode.prev = leader;
            newNode.next = rightNode;
            leader = newNode;

            this.length++;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            let unwantedNode = this.head;
            this.head = unwantedNode.next;
            this.head.prev = null;
            this.length--;
            return;
        }

        //TODO finish function
    }

    indexOf(value) {
        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return counter;
            }

            counter++;
            currentNode = currentNode.next;
        }

        return undefined;
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

    findLeader(index) {
        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }

            counter++;
            currentNode = currentNode.next;
        }

        return undefined;
    }
}

module.exports = DoublyLinkedList;
