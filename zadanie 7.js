// ! Задание 7
// *Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [1, 3, 5, 7, 0, 10, 12, 0, 8, `text`, null, true];
let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === `number` && arr[i] != 0) {
    if (arr[i] % 2 === 0) {
      even++;
    } else if (arr[i] % 2 !== 0) {
      odd++;
    }
  } else if (arr[i] === 0) {
    zero++;
  }
}
console.log(`кол-во четных ${even}, кол-во нечетных ${odd}`);
console.log(`есть ли нули ? кол-во: ${zero}`);
