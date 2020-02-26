class HashTable {
    constructor(size) {
        this.data = new Array(size);

        this.length = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    add(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
        this.length++;
    }

    // address -> [['grapes', 10000], ['gr', 1]]
    get(key) {
        const address = this._hash(key);
        const dataBucket = this.data[address];
        if (!dataBucket) {
            return undefined;
        }

        for (let i = 0; i < dataBucket.length; i++) {
            if (dataBucket[i][0] === key) {
                return dataBucket[i][1];
            }
        }
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j][0]);
                }
            }
        }

        return keys;
    }

    values() {
        throw new Error('Not implemented error');
    }
}

module.exports = HashTable;