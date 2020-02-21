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
        expect(stack.pop()).toEqual(undefined);
    });

    test('push', () => {
        const stack = new Stack();

        stack.push(1);
        expect(stack.top.value).toEqual(stack.bottom.value);

        stack.push(2);
        expect(stack.top.value).toEqual(2);
        expect(stack.top.next.value).toEqual(1);

        stack.push(3);
        expect(stack.top.value).toEqual(3);
        expect(stack.top.next.value).toEqual(2);
    });

    test('peek', () => {
        const stack = new Stack();
        stack.push(1);

        expect(stack.peek().value).toEqual(1);

        stack.push(2);
        expect(stack.peek().value).toEqual(2);
    });
});