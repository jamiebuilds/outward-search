// @flow
'use strict';

const isSafeInteger = require('is-safe-integer');

function outwardSearch/*:: <T> */(
  items /*: Array<T> */,
  start /*: number */,
  callback /*: (item: T, index: number) => boolean */
) /*: T | null */ {
  if (!items.length) {
    return null;
  }

  if (!isSafeInteger(start) || start < 0 || start > items.length - 1) {
    throw new TypeError('starting index must be within bounds of array');
  }

  let max = items.length - 1;
  let low = start;
  let high = start + 1;

  while (true) {
    let hitMin = low < 0;
    let hitMax = high > max;

    if (hitMin && hitMax) {
      break;
    }

    if (!hitMin) {
      let item = items[low];
      let result = callback(item, low);
      if (!!result) return item;
      low--;
    }

    if (!hitMax) {
      let item = items[high];
      let result = callback(item, high);
      if (!!result) return item;
      high++;
    }
  }

  return null;
}

module.exports = outwardSearch;
