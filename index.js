//Create list with products

// const products = ['Мышка', 'Клавиатура', 'Наушники'];
//                 const newProducts = ['Монитор', 'Принтер', 'Флешка'];

//                 for (product of newProducts) {
//                     products.push(product);
//                 }

//                 for (element in products) {
//                     const listEl = document.querySelector('.products');
//                     const liItem = document.createElement('li');
//                     listEl.append(liItem);
//                     liItem.textContent = products[element];
//                 }


//FIND MIN MAX NUMBER FROM ARRAY;

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
//     <h1>Поиск минимального и максимального числа</h1>
//     <p class="all-elements"></p>
//     <button class="min">Найти минимальное число</button>
//     <button class="max">Найти максимальное число</button>
//     <p>Минимальное число: <span class="minNumber"></span></p>
//     <p>Максимальное число: <span class="maxNumber"></span></p>
//     <script>
//         const numbers = [222, 1, 382, 20, 2346];

//         let min = numbers[0];
//         let max = numbers[0];

//         const allEl = document.querySelector('.all-elements');
//         allEl.append(numbers);

//         for (num in numbers) {
//             if (numbers[num] <= min) {
//                 min = numbers[num];
//             } else if (numbers[num] >= max) {
//                 max = numbers[num];
//             }
//         }

//         const buttonMin = document.querySelector('.min');
//         const buttonMax = document.querySelector('.max');

//         buttonMin.onclick = function () {
//             let spanEl = document.querySelector('.minNumber');
//             spanEl.textContent = min;
//         }

//         buttonMax.onclick = function () {
//             spanEl = document.querySelector('.maxNumber');
//             spanEl.textContent = max;
//         }

//     </script>
// </body>

// </html>




// //SHOP CART
// // <!DOCTYPE html>
// // <html lang="en">

// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// //     <link rel="stylesheet" href="style.css">
// // </head>

// // <body>
// //     <h1>Каталог товаров</h1>
// //     <ul id="product-list">
// //         <li>
// //             <span>Товар 1</span>
// //             <button onclick="addToCart('Товар 1')">Добавить в корзину</button>
// //         </li>
// //         <li>
// //             <span>Товар 2</span>
// //             <button onclick="addToCart('Товар 2')">Добавить в корзину</button>
// //         </li>
// //         <li>
// //             <span>Товар 3</span>
// //             <button onclick="addToCart('Товар 3')">Добавить в корзину</button>
// //         </li>
// //     </ul>
// //     <h1>Корзина</h1>
// //     <ul id="cart">
// //     </ul>
// //     <script>
        

// //         function addToCart (product) {

// //             const productItem = document.createElement('li');
// //             productItem.textContent = product;
// //             document.getElementById('cart').append(productItem);
            
// //         }


// //     </script>
// // </body>

// // </html>

// // CREATE COUNTER 

// // let count = 0;
        
// // const counterElement = document.querySelector('.counter');
// // const myButton = document.querySelector('.myButton');

// // function increase () {
// //     count++;
// //     counterElement.textContent = 'Счётчик: ' + count;
// // }

// // myButton.onclick = increase;


// //CALLBACK FUNC2

// // function access(age) {
// //     if (age >= 18) {
// //         console.log('Добро пожаловать на сайт!');
// //     } else {
// //         console.log('Доступ запрещен!');
// //     }

// // }

// // function userInput(callback) {
// //     const userAge = prompt('Введите ваш возраст: ');
// //     callback(userAge);
// // }


// // userInput(access);

// // CALLBACK FUNCTION 

// // function greeting (name) {
// //     console.log(`Hello, ${name}!`);
// // }

// // function user(callback) {
// //     const userName = prompt('Введите свое имя: ');
// //     callback(userName);
// // }

// // user(greeting);


// //TASK № 1

// // function getAverage(num = 0, num2 = 0, num3 = 0) {
// //     return (num + num2 + num3) / 3;
// // }

// // console.log(getAverage(1, 2, 3));

// //TASK № 2

// // function getFahrenheit(celsius) {
// //     return celsius * 1.8 + 32;
// // }

// // function getCelsius(fahrenheit) {
// //     return (fahrenheit - 32) / 1.8
// // }

// // console.log(getFahrenheit(25));
// // console.log(getCelsius(77));


// //TASK № 3

// // const getFahrenheit = (celsius) => celsius * 1.8 + 32;

// // const getCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

// // console.log(getFahrenheit(25));
// // console.log(getCelsius(77));


// //TASK № 5

// // let priceItem = 25000;
// // let amountItem = 3;
// // let discountItem = 20; 


// // function totalSum(price, amount, discount) {
// //     result = price * amount  * (1 - discount / 100);
// //     return result;
// // }

// // console.log(totalSum(priceItem, amountItem, discountItem))


// // let enter_card = prompt('Ввести карту: ');

// // if (enter_card == 'Нет') {

// //     console.log('Всего доброго!');

// // } else if (enter_card == 'Да') {

// //     let user_withdraw = prompt('Сколько денег необходимо снять? ');

// //     let cash = 500;
// //     if (cash >= user_withdraw) {
// //         console.log('Операция выполняется');
// //     } else {
// //         console.log('Операция отклонена');
// //     }

// // } else {
// //     console.log('Ошибка ввода - введите "Да" или "Нет"');
// // }



// // const num = 10;
// // let new_typeNum = String(num);
// // console.log(typeof new_typeNum, num);

// // const user_password = 'qwerty';
// // let user_input = prompt('Введите пароль: ')

// // if (user_password === user_input) {
// //     console.log('Пароли совпадают, доступ разрешён!');
// // } else {
// //     console.log('Доступ запрещён! Неверный пароль!');

// // }


// // const currentYear = 2024

// // let student = 'Илья';
// // let year = 2006;
// // let age = currentYear - year;

// // console.log("Студент:", student);
// // console.log("Год рождения:", year);
// // console.log("Возраст:", age);


// // let product1 = prompt('Введите наименование товара: '); // Название товара 1
// // let price1 = prompt('Введите стоимость товара: '); // Стоимость товара  1
// // let count1 = prompt('Введите количество товара: '); // Количество товара

// // console.log('Сумма всей покупки: ', product1, '-', price1 * count1, 'руб.');

// // let product2 =  prompt('Введите наименование товара: '); // Название товара 2
// // let price2 = prompt('Введите стоимость товара: ');  // Стоимость товара  2
// // let count2 = prompt('Введите количество товара: '); // Количесто товара 2

// // console.log('Сумма всей покупки: ', product2, '-',  price2 * count2, 'руб.');

// // let product3 = prompt('Введите наименование товара: '); // Название товара 2
// // let price3 = prompt('Введите стоимость товара: '); // Стоимость товара  2
// // let count3 =prompt('Введите количество товара: '); // Количесто товара 2

// // console.log('Сумма всей покупки: ', product3, '-',  price3 * count3, 'руб.');



// // let index = 0 // Счетчик

// // // Бегун 1
// // let runner1 = "Денис"
// // index++
// // console.log(index++, runner1);

// // // Бегун 2
// // let runner2 = "Виктория"
// // console.log(index++, runner2);

// // // Бегун 3
// // let runner3 = "Антон"
// // console.log(index++, runner3);

// // // Бегун 4
// // let runner4 = "Лена"
// // console.log(index++, runner4);

// // // Бегун 5
// // let runner5 = "Никита"
// // console.log(index++, runner5);



// // let num_index = 1;
// // let current_date = 2024;


// // let user_name1 = prompt('Введите имя первого пользователя: ');
// // let user_year1 = prompt('Введите год рождения первого пользователя: ');
// // let user_age1 = current_date - user_year1;

// // console.log(num_index, user_name1, user_age1);

// // let user_name2 = prompt('Введите имя второго пользователя: ');
// // let user_year2 = prompt('Введите год рождения второго пользователя: ');
// // let user_age2 = current_date - user_year2;

// // console.log(++num_index, user_name2, user_age2);

// // let user_name3 = prompt('Введите имя третьего пользователя: ');
// // let user_year3 = prompt('Введите год рождения третьего пользователя: ');
// // let user_age3 = current_date - user_year3;

// // console.log(++num_index, user_name3, user_age3);

// // let average_age = (user_age1 + user_age2 + user_age3) / 3;

// // console.log('Средний возраст пользователей: ', average_age);




// // let my_num = 1;
// // my_num++;

// // let Student_name = prompt('Введите имя: ');
// // let Student_surname = prompt('Введите фамилию: ');

// // let age = 25;
// // let height = 178;

// // console.log('Имя: ', Student_name, ',', 'Фамилия: ', Student_surname, 'Возраст (Лет):', age);