// Завдання 5
//1. Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//2. підставляє його поточне значення в span#name - output.
//3. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const defaultText = "Anonymous";

inputName.addEventListener("input", () => {
  console.log(inputName.value);
  if (inputName.value === "") {
    outputName.textContent = defaultText; //3
  } else outputName.textContent = inputName.value; //2
});
