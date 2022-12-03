// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

//2.   Використовуй масив об'єктів images для створення елементів <img>,
//1. вкладених в < li >.
//3. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

//4. Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgList = document.querySelector(".gallery");

const items = images.map(({ url, alt }) => {
  const item = document.createElement("li"); //1
  const img = `<img class="galleryImg" src=${url} alt=${alt}>`; //2
  item.insertAdjacentHTML("afterbegin", img); //3
  item.className = "item";
  return item;
});

const styles = document.querySelector("body");
const stylesInsert = document.createElement("style");
const galleryStyles = `.gallery {
      display: flex;
      gap: 20px;
  }
    .item {
      list-style: none;
    }
  .galleryImg {
    display: block;
    height: 300px;
  }`;
stylesInsert.insertAdjacentHTML("beforeend", galleryStyles);
styles.prepend(stylesInsert); //5

console.log(items);
imgList.append(...items); //4
