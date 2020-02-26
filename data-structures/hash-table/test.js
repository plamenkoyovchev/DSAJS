const HashTable = require('./HashTable');

describe('Hashtable', () => {
    test('newly initialized Hashtable should have zero elements inside it', () => {
        const ht = new HashTable(16);

        expect(ht.length).toEqual(0);
    });

    test('add 3 elements to the hashtable and data length should be equal to 3', () => {
        const ht = new HashTable(16);

        ht.add('1', 1);
        ht.add('2', 2);
        ht.add('3', 3);

        expect(ht.length).toEqual(3);
    });

    test('add is working correctly', () => {
        const ht = new HashTable(16);

        ht.add('1', 1);
        ht.add('2', 2);
        ht.add('3', 3);

        expect(ht.get('1')).toEqual(1);
        expect(ht.get('2')).toEqual(2)
        expect(ht.get('3')).toEqual(3);
    });

    test('keys should return empty array if there are no items in the hashtable', () => {
        const ht = new HashTable(16);

        expect(ht.keys()).toEqual([]);
    });

    test('Add seven pairs to the hashtable and keys length should equal 7', () => {
        const ht = new HashTable(16);

        ht.add('1', 1);
        ht.add('2', 2);
        ht.add('3', 3);
        ht.add('four', 4);
        ht.add('5', 5);
        ht.add('6dsds', 6);
        ht.add('7', 7);

        expect(ht.keys().length).toEqual(7);
    });

    test('keys should return all keys in the dictionary', () => {
        const ht = new HashTable(16);

        ht.add('1', 1);
        ht.add('2', 2);
        ht.add('3', 3);
        ht.add('four', 4);
        ht.add('5', 5);
        ht.add('6dsds', 6);
        ht.add('7', 7);

        const expectedKeys = ['1', '2', '3', 'four', '5', '6dsds', '7'];

        expect(ht.keys())
            .toEqual(expect.arrayContaining(expectedKeys));
    });
});