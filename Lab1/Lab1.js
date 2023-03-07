"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
//Задание 1
function createPhoneNumber(array) {
    if (array.length == 10) {
        return "(".concat(array[0]).concat(array[1]).concat(array[2], ") ").concat(array[3]).concat(array[4]).concat(array[5], "-").concat(array[6]).concat(array[7]).concat(array[8]).concat(array[9]);
    }
    else {
        return "Неверный формат номера!";
    }
}
var someArray = [5, 3, 3, 3, 7, 5, 5, 3, 8, 9];
console.log("Номер телефона: " + createPhoneNumber(someArray));
//Задание 2
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (yourNumber) {
        if (yourNumber < 0) {
            return 0;
        }
        var sumOfNumbers = 0;
        for (var i = 0; i < yourNumber; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sumOfNumbers += i;
            }
        }
        return sumOfNumbers;
    };
    return Challenge;
}());
exports.Challenge = Challenge;
console.log("Сумма всех натуральных чисел, кратных 3 или 5, до 20 равна: " + Challenge.solution(20));
//Задание 3
function shiftArray(usersArray, numberOfShifts) {
    if (numberOfShifts < 0 || usersArray.length == 0) {
        return [];
    }
    var tmp = 0;
    var arraysLength = usersArray.length;
    numberOfShifts = numberOfShifts % arraysLength;
    for (var i = 0; i < numberOfShifts; i++) {
        tmp = usersArray.pop();
        usersArray.unshift(tmp);
    }
    return usersArray;
}
var yourArray = [1, 2, 3, 4, 5];
console.log("Полученный массив:" + shiftArray(yourArray, 2));
