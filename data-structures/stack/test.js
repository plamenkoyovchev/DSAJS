const Stack = require('./Stack');

describe('Stack', () => {
    test('pop', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop().value).toEqual(3);
        expect(stack.pop().value).toEqual(2);
        expect(stack.pop().value).toEqual(1);
    });

    test('pop empty Stack should return undefined', () => {
        const stack = new Stack();
        expect(stack.pop()).toEqual(undefined);
    });

    test('push', () => {
        const stack = new Stack();

        stack.push(1);
        expect(stack.top.value).toEqual(stack.bottom.value);
        expect(stack.length).toEqual(1);

        stack.push(2);
        expect(stack.top.value).toEqual(2);
        expect(stack.top.next.value).toEqual(1);
        expect(stack.length).toEqual(2);

        stack.push(3);
        expect(stack.top.value).toEqual(3);
        expect(stack.top.next.value).toEqual(2);
        expect(stack.length).toEqual(3);
    });

    test('peek empty Stack should return null', () => {
        const stack = new Stack();
        expect(stack.peek()).toEqual(null);
    });

    test('peek', () => {
        const stack = new Stack();
        stack.push(1);

        expect(stack.peek().value).toEqual(1);

        stack.push(2);
        expect(stack.peek().value).toEqual(2);
    });

    test('peek shouldnt remove elements from the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.peek();

        expect(stack.length).toEqual(1);
        expect(stack.empty()).toEqual(false);
    });

    test('new Stack should be empty', () => {
        const stack = new Stack();
        expect(stack.empty()).toEqual(true);
    });

    test('push and pop to new Stack and stack should be empty', () => {
        const stack = new Stack();
        stack.push(1);
        stack.pop();
        expect(stack.empty()).toEqual(true);
    });

    test('push value to new Stack and stack shouldnt be empty', () => {
        const stack = new Stack();
        stack.push(1);

        expect(stack.empty()).toEqual(false);
    });
});