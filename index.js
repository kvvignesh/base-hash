'use strict'
function isNumber(num) {
    if (typeof num === 'number') {
        return num - num === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
};

function BaseHash(
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
) {
    this._characters = characters;
}

BaseHash.prototype.encode = function (num) {
    if (isNumber(num)) {
        let shortURL = '';
        while (num > 0) {
            shortURL += this._characters[num % this._characters.length];
            num = Math.floor(num / this._characters.length);
        }
        return shortURL.split('').reverse().join('');
    } else {
        return null;
    }
}

BaseHash.prototype.decode = function (str) {
    if (typeof str === 'string') {
        let decoded = 0;
        while (str) {
            const index = this._characters.indexOf(str[0]);
            const power = str.length - 1;
            decoded += index * (Math.pow(this._characters.length, power));
            str = str.substring(1);
        }
        return decoded;
    } else {
        return null;
    }
}

module.exports = BaseHash