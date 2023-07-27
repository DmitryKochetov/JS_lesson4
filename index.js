// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const numbers = [];
for (let index = 0; index <= 10; index++) {
  numbers[index] = index;
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    console.log(`${numbers[i]} - это 0`);
    continue;
  }
  if (numbers[i] % 2 === 0) {
    console.log(`${numbers[i]} - это четное число`);
  }
  if (numbers[i] % 2 !== 0) {
    console.log(`${numbers[i]} - это нечетное число`);
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const numb = [];
for (let index = 0; index < 7; index++) {
  numb[index] = index + 1;
}
console.log(numb);

numb.splice(3, 2);

console.log(numb);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arr = [];
for (let index = 0; index < 5; index++) {
  arr[index] = Number(Math.round(Math.random()*9));
}
console.log(arr);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let str = "";
for (let index = 0; index < 20; index++) {
    str = str + "x";
    console.log(str);
}
