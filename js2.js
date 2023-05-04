//Масиви та об'єкти:
// - 1. Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - 2. Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - 3. Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - 4. Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// 1
let a = [300, 'abc', 'idea', false, 1, [5,6,7], 'game', 'number',29900, true, 11] ;
console.log(a);
//2
let book1 = { title: 'HarryPotter', pageCount: 500, genre: 'fantasy'};
let book2 = { title: 'TheLordOfTheRings',pageCount: 400,genre: 'fantasy'};
let book3 = { title: 'Twilight', pageCount:460, genre: 'fantasy'};
//3task
let book4 = {title: 'HarryPotter', pageCount: 500, genre: 'fantasy', authors: [{name: 'Rowling', age: 57}]} ;
let book5 = { title:'TheLordOfTheRings',pageCount: 400,genre: 'fantasy', authors: [{name: 'Tolkien', age: 81}]} ;
let book6 = { title:'Twilight', pageCount:460, genre: 'fantasy', authors: [{name: 'Meyer', age: 48}]} ;
//4
let user = [{name: 'Anna', username:'qwer',password: '5690'},
    {name: 'Bella', username: 'uiop', password: 'lkjhg'},
    {name: 'Antony', username: 'qqqqq', password: '1023'},
    {name: 'Katya', username: 'katherine', password:'OOOO'},
    {name: 'Jake', username: 'jjjj', password: 'jk34'},
    {name: 'George', username: 'oooo', password: 'llll'},
    {name: 'Olya', username: 'uiop', password: 'vbnmm'},
    {name: 'Mike', username: 'ryeu', password: 'cjsw'},
    {name: 'Claus', username: 'bsmek', password: 'yesbk'},
    {name: 'Tina', username: 'sclslo', password: 'dkksnl'}  ]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

//
// Логічні розгалуження:
// - 1. Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 10;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
};

// - 2. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 49;
if (time>=0 && time<15) {
    console.log('1 чверть');
}
if ( time>=15 && time<30)
{
    console.log('2 чверть');
}
if ( time>=30 && time<45) {
    console.log ('3 чверть');
}
if ( time>= 45 && time <=59){
    console.log('4 чверть');
}

// - 3. У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15;
if (day>=0 && day<10) {
    console.log('1 декада');
}
if ( day>=10 && day<20)
{
    console.log('2 декада');
}
if ( day>=20 && day<=31) {
    console.log ('3 декада');
}
// - 4. Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let sch = 3;
//console.log(sch);
switch (sch) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Ener number from 1 to 7');
}


// - 5. Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let r = 15;
let f = 15;
if (r>f) {
    console.log(r);
}
else if (f>r) {
    console.log(f)
}
else if (f=r) {
    console.log('The numbers are equal');
}

//
// - 6.є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
// - 7. з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

 if ( coursesAndDurationArray [0].monthDuration > 5){
     console.log('Супер');
 }
 else if (coursesAndDurationArray [0].monthDuration <= 5) {
     console.log (':(');
 }

if ( coursesAndDurationArray [1].monthDuration > 5){
    console.log('Супер');
}
else if (coursesAndDurationArray [1].monthDuration <= 5) {
    console.log (':(');
}
if ( coursesAndDurationArray [2].monthDuration > 5){
    console.log('Супер')
}
else if (coursesAndDurationArray [2].monthDuration <= 5) {
    console.log (':(')
}
if ( coursesAndDurationArray [3].monthDuration > 5){
    console.log('Супер')
}
else if (coursesAndDurationArray [3].monthDuration <= 5) {
    console.log (':(')
}
if ( coursesAndDurationArray [4].monthDuration > 5){
    console.log('Супер')
}
else if (coursesAndDurationArray [4].monthDuration <= 5) {
    console.log (':(')
}
if ( coursesAndDurationArray [5].monthDuration > 5){
    console.log('Супер')
}
else if (coursesAndDurationArray [5].monthDuration <= 5) {
    console.log (':(')
}