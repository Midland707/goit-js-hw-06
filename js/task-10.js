// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const numberInput = document.querySelector("input");

let amount = 0;
numberInput.addEventListener("input", () => {
  amount = Number(numberInput.value);
  buttonCreate.addEventListener("click", createBoxes(amount));
});

function createBoxes(amount) {
  console.log(amount);
  console.log("ALL GREATED");
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement("div");
    item.classList = "item";
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${30 + 10 * i}px`;
    item.style.height = `${30 + 10 * i}px`;
    item.textContent = i + 1;
    boxes.append(item);
  }
}

function destroyBoxes() {
  if (boxes === null) console.log("Немає, що витирати");
  else {
    boxes.remove();
    console.log("ALL DELETED");
  }
}

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);
