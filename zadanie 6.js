// ! Задание 6
//* Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = [5, 5, 5, 5];
// let arr = [1, 2, 5, 6, 8, 5];

let trueOrFalse = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[0] !== arr[i]) {
    trueOrFalse = false;
  }
}
console.log(trueOrFalse);