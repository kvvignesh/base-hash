# base-hash

[![NPM Package](https://img.shields.io/npm/v/hash-base.svg?style=flat-square)](https://www.npmjs.org/package/base-hash)

This is an awesome lightweight util helps to hash with different base

## Example

```js

const BaseHash = require('base-hash');

const baseHash = new BaseHash();

console.log(baseHash.encode(12345)); //dnh
console.log(baseHash.decode('dnh')); //12345

```

By default the characters used for hashing are
```
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
```

If you want to override the characters please refer the below code

```js
const BaseHash = require('base-hash');

const baseHash = new BaseHash('abcde');

console.log(baseHash.encode(12345)); //deddea
console.log(baseHash.decode('deddea')); //12345
```

You also can check [source code](index.js)

## LICENSE

MIT
