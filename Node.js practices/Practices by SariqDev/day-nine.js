// HASH tables

class HashTable {
    constructor(size = 50) {
        this.table = new Array(size);
        this.size = size;
    }

    // Simple hash function

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }

    // Insert or update key - value
    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        //Check if the key already exists -> update it
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        //Else add new pair
        this.table[index].push([key, value]);
    }

    // Retrieve value by key
    get(key) {
        const index = this._hash(key);
        if (!this.table[index]) return undefined;
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return undefined;
    }

    // Remove key-value pair
    remove(key) {
        const index = this._hash(key);
        if (!this.table[index]) return false;

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                return true;
            }
        }
        return false;
    }

}