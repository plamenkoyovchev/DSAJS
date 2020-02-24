const BST = require('./BinarySearchTree');

describe('Binary Search Tree', () => {

    test('BST can insert correctly', () => {
        const bst = new BST();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(17);

        expect(bst.root.value).toEqual(10);
        expect(bst.root.left.value).toEqual(5);
        expect(bst.root.right.value).toEqual(15);
        expect(bst.root.right.right.value).toEqual(17);
    });

    test('Lookup returns node with the same data', () => {
        const bst = new BST();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(20);
        bst.insert(0);
        bst.insert(-5);
        bst.insert(3);

        const three = bst.root.left.left.right;
        expect(bst.lookup(3)).toEqual(three);
    });

    test('Lookup returns null if value not found', () => {
        const bst = new BST();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(20);
        bst.insert(0);
        bst.insert(-5);
        bst.insert(3);

        expect(bst.lookup(9999)).toEqual(null);
    });

    test('Lookup should return node with value = 5', () => {
        const bst = new BST();
        bst.insert(9);
        bst.insert(7);
        bst.insert(10);
        bst.insert(5);
        bst.insert(8);
        bst.insert(12);
        bst.insert(11);
        bst.insert(4);
        bst.insert(6);

        expect(bst.root.value).toEqual(9);
        const searchedNode = bst.lookup(5);
        expect(searchedNode).not.toEqual(null);
        expect(searchedNode.value).toEqual(5);
    });
});