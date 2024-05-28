function navBtn() {
  // Получаем ссылки на необходимые элементы
  const navBtn = document.querySelector('.header__btn-icon');
  const nav = document.querySelector('.information');
  const menuIcon = document.querySelectorAll('.nav-icon__line');

  // Добавляем обработчик клика на кнопку навигации
  navBtn.addEventListener('click', () => {
    // Переключаем класс 'information--open' для элемента с классом 'information'
    // чтобы открыть/закрыть меню
    nav.classList.toggle('information--open');

    // Переключаем класс 'nav-icon__line--active' для всех элементов с классом 'nav-icon__line'
    // чтобы изменить вид кнопки
    menuIcon.forEach((line) => {
      line.classList.toggle('nav-icon__line--active');
    });

    // Переключаем класс 'no-scroll' для элемента body
    // чтобы запретить прокрутку страницы, когда открыто навигационное меню
    document.body.classList.toggle('no-scroll');
  });
}

export default navBtn;
