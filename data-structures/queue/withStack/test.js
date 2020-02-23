const Queue = require('./QueueWithStack');

describe('Queue', () => {
    test('Queue is a class', () => {
        expect(typeof Queue.prototype.constructor).toEqual('function');
    });

    test('can add elements to a queue', () => {
        const q = new Queue();
        expect(() => {
            q.enqueue(1);
        }).not.toThrow();
    });

    test('can remove elements from a queue', () => {
        const q = new Queue();
        expect(() => {
            q.enqueue(1);
            q.dequeue();
        }).not.toThrow();
    });

    test('enqueue 1 element', () => {
        const queue = new Queue();

        queue.enqueue(1);

        expect(queue.peek().value).toEqual(1);
        expect(queue.empty()).toEqual(false);
    });

    test('dequeue 1 element', () => {
        const queue = new Queue();

        queue.enqueue(1);
        const dequeuedNode = queue.dequeue();

        expect(dequeuedNode.value).toEqual(1);
        expect(queue.empty()).toEqual(true);
    });

    test('first should equal last if only one element is left', () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        queue.dequeue();
        queue.dequeue();

        expect(queue.peek().value).toEqual(3);
    });

    test('Order of elements is maintained', () => {
        const q = new Queue();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        expect(q.dequeue().value).toEqual(1);
        expect(q.dequeue().value).toEqual(2);
        expect(q.dequeue().value).toEqual(3);
        expect(q.dequeue()).toEqual(null);
    });

    test('peek empty queue should return null', () => {
        const queue = new Queue();

        expect(queue.peek()).toEqual(null);
    });

    test('peek should return first element', () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);

        const peek = queue.peek();
        expect(peek).not.toEqual(null);
        expect(peek.value).toEqual(1);
    });

    test('empty should be true if queue is newly instantiated', () => {
        const queue = new Queue();

        expect(queue.empty()).toEqual(true);
    });

    test('empty should be false if element is added to the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);

        expect(queue.empty()).toEqual(false);
    });

    test('empty should be false if element is added to the queue and then removed', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.empty()).toEqual(false);

        queue.dequeue();
        expect(queue.empty()).toEqual(true);
    });
});