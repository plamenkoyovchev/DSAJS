const LinkedList = require('./LinkedList');
const Node = require('./Node');

describe('Node', () => {
    test('Node is a class', () => {
        expect(typeof Node.prototype.constructor).toEqual('function')
    });

    test('has properties data and next that data equals a and next equals b', () => {
        const node = new Node('a', 'b');
        expect(node.value).toEqual('a');
        expect(node.next).toEqual('b');
    });
});

describe('LinkedList', () => {
    test('LinkedList is a class', () => {
        expect(typeof LinkedList.prototype.constructor).toEqual('function')
    });

    test('The head and the tail of the linked list should be equal when initialize LinkedList', () => {
        const list = new LinkedList(10);
        expect(list.head).toEqual(list.tail);
    })

    test('Appended node value should equal tail value', () => {
        const list = new LinkedList(1);
        list.append(2);

        expect(list.tail.value).toEqual(2);
    });

    test('Prepended node value should equal to head value', () => {
        const list = new LinkedList(2);
        list.append(3);
        list.append(10);
        list.append(4);
        list.prepend(-1);

        expect(list.head.value).toEqual(-1);
    });
});