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


}