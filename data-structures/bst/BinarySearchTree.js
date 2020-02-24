const Node = require('./Node');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value) {
                return;
            }

            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return newNode;
                }

                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return newNode;
                }

                currentNode = currentNode.right;
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return null;
        }

        let currentNode = this.root;
        while (true) {
            if (!currentNode) {
                return null;
            }

            if (value === currentNode.value) {
                return currentNode;
            }

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

module.exports = BinarySearchTree;