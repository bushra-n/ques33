"use strict";
// task 33 ordinal number .....output would be 1st,2nd,3rd
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = 3;
let ordinal;
{
    if (number === 1) {
        ordinal = number + "st";
    }
    else if (number === 2) {
        ordinal = number + "nd";
    }
    else if (number === 3) {
        ordinal = number + "rd";
    }
    else {
        ordinal = number + "th";
    }
    console.log(ordinal);
}
