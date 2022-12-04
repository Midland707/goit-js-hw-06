// Завдання 8
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

//1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//2. Під час відправлення форми сторінка не повинна перезавантажуватися.
//3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//5. а значення поля - значенням властивості.Для доступу до елементів форми використовуй властивість elements.
//6 Виведи об'єкт із введеними даними в консоль
//7. і очисти значення полів форми методом reset.

const myForm = document.querySelector(".login-form");

myForm.addEventListener("submit", funcSubmit); //1

function funcSubmit(event) {
  event.preventDefault(); //2
  const {
    elements: { email, password }, //5
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!"); //3
  }

  const dataObj = {}; //4
  dataObj.email = email.value; //4
  dataObj.password = password.value; //4

  console.log(dataObj); //6
  event.currentTarget.reset(); //7
}
