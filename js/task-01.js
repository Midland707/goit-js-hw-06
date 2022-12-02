// Завдання 1
// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3
const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

allCategories.forEach((element) => {
  const category = element.querySelector("H2");
  console.log(`Category: ${category.textContent}`);
  const elements = element.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
});
