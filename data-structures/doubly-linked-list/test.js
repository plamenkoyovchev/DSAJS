const Node = require('./Node');
const DoublyLinkedList = require('./DoublyLinkedList');

describe('Node', () => {
    test('is a class', () => {
        expect(typeof Node.prototype.constructor).toEqual('function')
    });

    test('new node has properties data, next and prev that data equals a and next equals null and prev equals null', () => {
        const node = new Node('a');
        expect(node.value).toEqual('a');
        expect(node.next).toEqual(null);
        expect(node.prev).toEqual(null);
    });
});