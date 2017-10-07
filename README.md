# outward-search

> Search an array of items outwards from a starting index

## Install

```sh
yarn add outward-search
```

## Usage

```js
import outwardSearch from 'outward-search';

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let match = searchOutwards(arr, 3, (item, index) => {
  console.log('called: ' + item);
  return item === 'e';
});

// called: d
// called: e
// called: c
// called: f
console.log(match); // 'f'
```

If you need to find an item in an array that you know should be near another
item, you can use outward-search to do so efficiently.

```js
export default function outwardSearch<T>(
  items: Array<T>,
  start: number,
  callback: (item: T, index: number) => boolean,
): T | null;
```

The `callback` is called on the `start` index then it works its way outwards to
either end of the array.

So with the starting index of `2` and an array with 8 items:

```js
2 // start
3 // up
1 // down
4 // up
0 // down (hit min)
5 // up
6 // up
7 // up (hit max)
```
