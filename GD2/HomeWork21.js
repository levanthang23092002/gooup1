import {store} from './store.js';

const first = store.products?.[0]?.details?.specifications;
if (first) {
  console.log(first);
} else {
  console.log("Specifications cannot be found.");
}

const theSecond = store.products?.[2]?.getPrice?.();
if (theSecond) {
  console.log(theSecond);
} else {
  console.log("Không có thông tin giá.");
}