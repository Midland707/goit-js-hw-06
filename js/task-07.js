// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і
// змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

let size = inputRange.value;
const styles = document.querySelector("body");
const stylesInsert = document.createElement("style");
const textStyles = `#text {
    font-size: ${size}px;
  }`;
stylesInsert.insertAdjacentHTML("beforeend", textStyles);
styles.prepend(stylesInsert);

inputRange.addEventListener("input", () => {
  console.log(inputRange.value);
  size = inputRange.value;
  const textStyle = `#text {
    font-size: ${size}px;
  }`;
  stylesInsert.innerHTML = textStyle;
});
