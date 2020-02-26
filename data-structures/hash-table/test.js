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
});