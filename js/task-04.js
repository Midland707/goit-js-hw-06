// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//2. Додай слухачів кліків до кнопок,
//3. всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0; //1
const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
const counter = document.querySelector("#value");

//callback function decrement
function valueDecrement() {
  counterValue -= 1; //3
  counter.textContent = counterValue; //4
}
//callback function increment
const valueIncrement = () => {
  counterValue += 1; //3
  counter.textContent = counterValue; //4
};

btnDecrement.addEventListener("click", valueDecrement); //2
btnIncrement.addEventListener("click", valueIncrement); //2
