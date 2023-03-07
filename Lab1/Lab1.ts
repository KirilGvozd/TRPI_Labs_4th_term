//Задание 1
function createPhoneNumber(array: number[]): string {
    if (array.length == 10) {
        return `(${array[0]}${array[1]}${array[2]}) ${array[3]}${array[4]}${array[5]}-${array[6]}${array[7]}${array[8]}${array[9]}`;
    } else {
        return "Неверный формат номера!";
    }
}

let someArray: number[] = [5, 3, 3, 3, 7, 5, 5, 3, 8, 9];

console.log("Номер телефона: " + createPhoneNumber(someArray));

//Задание 2
export class Challenge {
    static solution(yourNumber: number): number {
        if (yourNumber < 0){
            return 0;
        }
        let sumOfNumbers: number = 0;
        for (let i = 0; i < yourNumber; i++) {
            if (i % 3 == 0 || i % 5 == 0){
                sumOfNumbers += i;
            }
        }
        return sumOfNumbers;
    }
}

console.log("Сумма всех натуральных чисел, кратных 3 или 5, до 20 равна: " + Challenge.solution(20));

//Задание 3
function shiftArray (usersArray: number[], numberOfShifts: number): number[] {
    if (numberOfShifts < 0 || usersArray.length == 0) {
        return [];
    }
    let tmp = 0;
    let arraysLength: number = usersArray.length;
    numberOfShifts = numberOfShifts % arraysLength;

    for (let i = 0; i < numberOfShifts; i++) {
        tmp = usersArray.pop();
        usersArray.unshift(tmp);
    }

    return usersArray;
}

let yourArray: number[] = [1, 2, 3, 4, 5];
console.log("Полученный массив:" + shiftArray(yourArray, 2));