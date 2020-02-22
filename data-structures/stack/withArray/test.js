const Stack = require('./StackWithArray');

describe('Stack', () => {
    test('pop', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
    });

    test('pop empty Stack should return undefined', () => {
        const stack = new Stack();
        expect(stack.pop()).toEqual(undefined);
    });

    test('push', () => {
        const stack = new Stack();

        stack.push(1);
        expect(stack.peek()).toEqual(1);

        stack.push(2);
        expect(stack.peek()).toEqual(2);

        stack.push(3);
        expect(stack.peek()).toEqual(3);
    });

    test('peek empty stack should return undefined', () => {
        const stack = new Stack();
        expect(stack.peek()).toEqual(undefined);
    });

    test('peek', () => {
        const stack = new Stack();
        stack.push(1);

        expect(stack.peek()).toEqual(1);

        stack.push(2);
        expect(stack.peek()).toEqual(2);
    });

    test('peek shouldnt remove elements from the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.peek();

        expect(stack.peek()).toEqual(1);
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