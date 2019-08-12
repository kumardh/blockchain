const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, date, data, previousHash) {
        this.index = index;
        this.date = date;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
    }

    createHash() {
        return SHA256(this.index + this.date + this.data + this.previousHash).toString();
    }
}

// var b1 = new Block(1, new Date('1/1/2019'), {amount: 100}, '');
// console.log(b1.hash);

exports.ABC = "ABC";
exports.func = () => {console.log("func"); return "func-1";};

