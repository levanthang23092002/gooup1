// import hotels as name myHotel, import misc, import promotionPercentCalc from hotel.js

// assign for each hotel a random emoji

// calculate promotionPercentCalc for all hotel in myHotel

// assign proper tag for hotel
// cheapest - lowest promotionPrice
// best-price - lowest promotionPercent
// lowest-clean-fee - lowest clean fee
import { tags, emojis, promotionPercentCalc, hotels as myHotel, convertNumber as convertCurrencyToNumber} from './hotel.js';

// Sử dụng tags và emojis



function reverseEmojis (arr){
    let len = arr.length  ;
    let newarr = [];
    while(len > 0){
       let x = Math.floor(Math.random() * len);
       let cut = arr.splice(x,1)[0];
       newarr.push(cut);
       len--;

    }
    return newarr;
}



function addEmojis(arr, arrEmojis) {
    let newEmojis = reverseEmojis(arrEmojis)
    for (let i = 0; i < arr.length; i++) {
      arr[i].emojis = newEmojis[i];
    }
    return arr;
  }

let arr = addEmojis(myHotel,emojis);


function addprecent(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].promotionPercent = promotionPercentCalc(arr[i].price, arr[i].promotionPrice) + " % "
    }
    return arr;
  }

arr = addprecent(myHotel);


function findLowestCleaningFee(array) {
  let lowestFee = null;

  for (let item of array) {
    let fee = convertCurrencyToNumber(item.cleaningFee);
    if (lowestFee === null || fee < lowestFee) {
      lowestFee = fee;
    }
  }

  return lowestFee;
}



function findLowestPromotionPercent(array) {
  let lowestPercent = null;

  for (let item of array) {
    let percent = parseFloat(item.promotionPercent);
    if (lowestPercent === null || percent < lowestPercent) {
      lowestPercent = percent;
    }
  }

  return lowestPercent;
}



function findLowestPromotionPrice(array) {
  let lowestPrice = null;

  for (let item of array) {
    let price = convertCurrencyToNumber(item.promotionPrice);
    if (lowestPrice === null || price < lowestPrice) {
      lowestPrice = price;
    }
  }

  return lowestPrice;
}

function addTag(array) {
  let lowestFee = findLowestCleaningFee(array);
  let lowestPrice = findLowestPromotionPrice(array);
  let lowestPercent = findLowestPromotionPercent(array);

  for (let item of array) {
    let tag = "";

    let percent = parseFloat(item.promotionPercent);
    let price = convertCurrencyToNumber(item.promotionPrice);
    let fee = convertCurrencyToNumber(item.cleaningFee);

    if (price === lowestPrice) {
      tag = "cheapest";
    }
    if (percent === lowestPercent) {
      tag += " best-price";
    }
    if (fee === lowestFee) {
      tag += " lowest-clean-fee";
    }

    item.tag = tag;
  }

  return array;
}

console.log(addTag(arr));