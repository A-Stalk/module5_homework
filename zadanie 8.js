// * Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y». Используйте шаблонные строки.

let myMap = new Map([
  [`apple`, `green`],
  [`strawberry`, `red`],
  [`blueberry`, `blue`],
]);
for (let [name, color] of myMap) {
  console.log(`Ключ — ${name}, значение — ${color}`);
}
