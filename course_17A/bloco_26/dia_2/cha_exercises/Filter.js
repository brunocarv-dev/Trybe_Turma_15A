"use strict";
function myFilter(array, callBack) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(myFilter([1, 2, 3], (item, index, array) => item < 3));
