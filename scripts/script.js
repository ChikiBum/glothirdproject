'use strict';

const booksCollection = document.querySelectorAll('aside'),
    book = document.querySelectorAll('div.book'),
    advertising = document.querySelector('.adv'),
    body = document.querySelector('body'),
    bookTitle = book[4].querySelector('a'),
    ulCollection = booksCollection[0].querySelectorAll('ul'),
    liBook2Collection = ulCollection[0].querySelectorAll('li'),
    liBook5Collection = ulCollection[5].querySelectorAll('li'),
    liBook6Collection = ulCollection[2].querySelectorAll('li');

//Заменить картинку заднего фона на другую из папки image
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

//Удалить рекламу со страницы
advertising.remove();

//Восстановить порядок книг.
booksCollection[0].prepend(book[4]);
booksCollection[0].prepend(book[0]);
booksCollection[0].prepend(book[1]);
booksCollection[0].append(book[2]);

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
bookTitle.innerText = 'Книга 3. this и Прототипы Объектов';

//Восстановить порядок глав во второй 
liBook2Collection[3].after(liBook2Collection[8]);
liBook2Collection[3].after(liBook2Collection[6]);
liBook2Collection[9].after(liBook2Collection[2]);
//и пятой книге 
liBook5Collection[1].after(liBook5Collection[9]);
liBook5Collection[9].after(liBook5Collection[3]);
liBook5Collection[4].after(liBook5Collection[2]);
liBook5Collection[7].after(liBook5Collection[5]);
liBook5Collection[7].after(liBook5Collection[5]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
liBook6Collection[8].insertAdjacentHTML('afterend', ' <li>Глава 8: За пределами ES6</li>');

// // console.log(bookTitle.innerText);
// console.log(booksCollection);
// console.log(ulCollection);
// console.log(ulCollection[0]);
// console.log(ulCollection[1]);
// console.dir(ulCollection[2]);
// console.log(ulCollection[3]);
// console.log(ulCollection[4]);
// console.log(ulCollection[5]);

