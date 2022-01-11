

/* Типы данных*/
let web = 5;
const zero = null;
console.log(zero);

let boolean = (1 > 3);
console.log(typeof(boolean));

let number = 10;

let string = "10";
console.log(typeof(string));

let bigint = 47328948489n;
console.log(typeof(bigint));

let userInfo = {
    name: "Саша",
    age: 45
}
console.log(userInfo);
console.log(typeof(userInfo));
/* операторы*/
let x;
x = number + string;
console.log(x);

let a = 1 + 2;
let b = 3;

let result = 8 - (a = b + 3);
console.log(result);

let admins = 10;
admins--;
console.log(admins)

let usersCounter = 0

let newUsers = ++usersCounter;
console.log(newUsers);

console.log(1 > 2);
console.log(3 < 1);
console.log(3 >= 3);
console.log(2 <= 2);
console.log(number == string);
console.log(number === string);
console.log(number != string);
console.log(number !== string);

console.log(true || false);
console.log(0 || 1);
console.log(1 || 2);
console.log(0 || 0);
console.log( false || false);

admins = 10;
let users = 5;

admins > users || users++;
console.log(users);

console.log(true && true);
console.log(0 && 1);
console.log(1 && 0);
console.log(1 && 1);

console.log(1 && 0 || 2 && 1);

users = 1
users > 0 && console.log(`Пользователей ${users}`);

console.log(!true && 58 || 18 && !1);

/* функции*/
let usersOnline = 0
if (usersOnline > 0){
console.log(`Пользователей ${users}`)
}
else{
    console.log("пусто:(")
}

let message = "Привет";
let messageEnd;

if ( 1 > 1) {
    
    messageEnd = ", Вася";
} else{
    messageEnd = ", Оля!"
}
message += messageEnd;
console.log(message);
/*
let messageEnd = (5 > 1) ? ", Вася!" : "Оля!";

message +- messageEnd
console.log(message)
*/
/*Циклы*/

let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}

let numFive = 5;
while (numFive){
    console.log(numFive);
    numFive--
}

for (let numFor = 0; numFor < 5; numFor++){
    console.log(numFor);
}

num = 0;
for (num; num < 5; num++){
    console.log(num);
    if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);

num = 0;
for ( num; num < 5; num++){
    if (num == 2) continue;
    console.log(num);
}

let home = 1;
for (home; home < 6; home++ ){
    console.log(home)
}

let homeTwo = 0;
while (homeTwo < 5 ){
    homeTwo++
    console.log(homeTwo);
}

let bum = 8;
while (bum){
    console.log(bum);
    bum--;
}

num = 0;
while (num < 3 ){
    console.log(`Число: ${num}`);
    num++;
}

for (num = 0; num < 2; num++ ){
    for (let size = 0; size < 3; size++){
        console.log(size);
        if (size == 1) break;
    }
}

/* Функции*/

function showMessage() {
    console.log("Сообщение");
}

showMessage();
showMessage();


function calcSumm(numOne, numTwo) {

    let numSumm = numOne + numTwo;
    console.log(`Сумма:${numSumm}`);
}

calcSumm(1, 2);

function calcGumm(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else{
        return numOne * calcGumm(numOne, numTwo - 1);
    }
}
console.log(calcGumm(2, 3));


let literal = {
    login: "Wasa",
    password: 563,
    "java Dev Junior": true,
}

console.log(literal);
console.log(literal["java Dev Junior"]);

let interal = {
    login: "Wasa",
    password: 563,
    userInfo:{
        age: 22,
        name: "Vasili",
        city: "Minsk",
    }
}

console.log(interal);
console.log(interal.userInfo);
console.log(interal.userInfo.name);

function makeUserInfo(age, name) {
    return{
        name: name,
        age: age,
    };
}

let userFunction = makeUserInfo(23, "Wasa");
console.log(userFunction);

let userInfoG = {
    name: "Kirya",
    showInfo: function (){
        console.log(`${userInfoG.name}, ${userInfoG.age} лет. Адрес: г.${userInfoG.address.Town}, ул.${userInfoG.address.street}`)
    },
    showArmy: function(){
        console.log(`${this["In Army"]}`);
    }
}
userInfoG.age = 18;
userInfoG["In Army"] = true
userInfoG.address = {
    Town: "Marina Gorka",
    street: "Leninskaya",
}
console.log(userInfoG);

let userInfoC = Object.assign({}, userInfoG);
userInfoC.age = 20;
console.log(userInfoC);

if ("name" in userInfoG){
    console.log(userInfoG.name);
}
for (let key in userInfoG){
    console.log(key);
    console.log(userInfoG[key]);
}
for (let key in userInfoG.address) {
console.log(key);
console.log(userInfoG.address[key]);
}
userInfoG.showInfo();
userInfoG.showArmy();

function userInfoCr(name) {
    this.name = name;
    this.age = 30;
}
console.log(new userInfoCr("Киря"));
console.log(new userInfoCr("Свет04ка"));


function showNumbers(numOne, numTwo){
console.log(`первое число ${numOne}`);
console.log(`второе число ${numTwo}`);

let numSumm = numOne + numTwo;
console.log(`сумма ${numSumm}`);
}
showNumbers(1, 2);






let userInfoD = {
    name: "Вася",

}
userInfoD.age = "30";
userInfoD.name = "Лена";
delete userInfoD.name;
console.log(userInfoD);
// числа


let numOneOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;

console.log(numOneOne);

let value = "158.58px";

console.log(parseFloat(value));

console.log(Math.max(10, 58, 39, -150, 0));
console.log(Math.floor(58.858));


















function recourceArmy(){

};

let text = `фрилансер`;
console.log(text.toUpperCase());
console.log(text.slice(3, 6));
console.log(text.includes(`лан`, 4));

let arr = [ `Ваня`, `Иштван` ];
arr.push(`Оля`);
console.log(arr);
arr.splice(1, 1, `Петя`);
console.log(arr);
let removedElement = arr.shift();
console.log(arr);
console.log(removedElement);
arr.splice(0, 0, `Маша`, `Паша`);
console.log(arr);

let str = `Ваня,Иштван,Коля`;
let arr1 = str.split(`,`);
console.log(arr1);


const hi = document.querySelectorAll(`[data-say-hi="yes"]`);
console.log(hi);
const textHi = document.querySelector(`[data-say-hi="yes"]`);
console.log(textHi);
const Pidor = textHi.innerHTML;
console.log(Pidor);
const yonchi = document.getElementById(`321`);
const huita = yonchi.innerHTML;
console.log(huita);
const like = document.querySelectorAll(`.like`);
console.log(like);

const scrollWidth = document.body.scrollWidth;
console.log(scrollWidth);

function setScrollTo() {
window.scrollTo (0, 100);
const windowScrollTop = window.pageYOffset; 
console.log(windowScrollTop);
}
setTimeout(setScrollTo, 1000);
//setScrollTo();


const buttonItem = document.querySelector(`.button`);
console.log(buttonItem);
const textAreaItem = document.querySelector(`.textarea`);
console.log(textAreaItem);

const search = document.querySelector(`.search`);
document.addEventListener(`click`, watch);

function watch (event){
    if (event.target.closest(`.button`)){
        textAreaItem.classList.toggle(`__active`);
        counter.classList.toggle(`__active2`);
    };
    if (!event.target.closest(`.search`)){
        textAreaItem.classList.remove(`__active`);
        counter.classList.remove(`__active2`);
    };  
    
};
document.addEventListener(`keyup`, function(event) {
if (event.code == `Escape`) {
    textAreaItem.classList.remove(`__active`);
    counter.classList.remove(`__active2`);
}
});
const counter = document.querySelector(`.textarea__lenght`);

const txtLimit = textAreaItem.getAttribute(`maxlength`);
const counterSpan = document.querySelector(`.textarea__lenght span`);
counterSpan.innerHTML = txtLimit;

textAreaItem.addEventListener("keyup", txtSetCounter);
textAreaItem.addEventListener("keydown", function (event){
    if (event.repeat) txtSetCounter();
});
function txtSetCounter() {
    const txtCounterResult = txtLimit - textAreaItem.value.length;
    counterSpan.innerHTML = txtCounterResult;
};




//Вязка с формами счётчик слов

const mainForm = document.forms.main;
console.log(mainForm);

const mainFormInput = mainForm.nameInput;
const inputValue = mainFormInput.getAttribute(`maxlength`);
const counterPlace = document.querySelector(`.counter__searchbar span`);
counterPlace.innerHTML = inputValue;
mainFormInput.addEventListener("keyup", txtCounter);
mainFormInput.addEventListener("keydown", function (event) {
    if (event.repeat)
        txtCounter();
});
function txtCounter(){
    const inputResult = inputValue - mainFormInput.value.length;
    counterPlace.innerHTML = inputResult;
};



const mainFormTextArea = mainForm.nameTextArea;
const counterText = document.querySelector(`.counter span`);
const textMaxLength = mainFormTextArea.getAttribute(`maxlength`)
counterText.innerHTML = textMaxLength;

mainFormTextArea.addEventListener("keyup", txtHowCounter);
mainFormTextArea.addEventListener("keydown", function (event){
if (event.repeat) txtHowCounter();
});
function txtHowCounter() {
    const counterSpanResult = textMaxLength - mainFormTextArea.value.length;
    counterText.innerHTML = counterSpanResult;
}


//иллюстрация файла
const fileImage = mainForm.nameFile;

fileImage.addEventListener("change", function (e) {
    let selectedFile = fileImage.files[0];
    let fileURL = URL.createObjectURL(selectedFile);
    
    fileImage.parentElement.insertAdjacentHTML(
        "beforeend",
        `<div class="main__form-image">
        <img alt="" title="${selectedFile.name}" src="${fileURL}">
        </div>`
    );
});
// убираем строки в полях

mainFormInput.addEventListener("focus", function (event) {
    mainFormInput.placeholder = " ";
});
mainFormInput.addEventListener("blur", function (event){
    mainFormInput.placeholder = "Ввод";
});

mainFormTextArea.addEventListener("focus", function (event){
    mainFormTextArea.placeholder = " ";
});
mainFormTextArea.addEventListener("blur", function (event){
    mainFormTextArea.placeholder = "Ввод";
});






