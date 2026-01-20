// переменные js
// премитивные типы данных
let text = "hello"; // изменяемое значение
text = "not hello";
const pi = 3.14; // неизменяемое значение
const isOpen = false; // false or true
let name;

console.log(text);
console.log(pi);

// комплексные типы данных

// где name - ключ , а "Anton" - свойство
const object = {
    name: "Anton",
    age: 32,
}
console.log(object.name); // вызываем имя обьекта 


// массив
const titles = ["Make your dream come true or decorate your home", 
    "create or buy",
    "our store",];

    console.log(titles[0]); //вызываем первый  заголовок 


//функции

function calc(a, b) {
    console.log(a + b);   
}

calc(5, 5);
calc(10, 12);

//условия
const isOpen = false; // false or true

if (isOpen) {
console.log('shop is open');  
} else {
console.log('shop is closed'); 
}

//события
//доступ к елементам страницы
const vase = document.querySelector(".touch__img_small")
console.log(vase);

//сообщение по клику на картинку
vase.addEventListener('click', () => {
 console.log(vase);   
});