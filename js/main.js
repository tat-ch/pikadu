let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');
//отслеживание клика по кнопке меню и запуск функуции
menuToggle.addEventListener('click', function (event) {
    //отменили стандартное поведение ссылки
    event.preventDefault();
    //добавление класса меню при клике на кнопке
    menu.classList.toggle('visible');
})