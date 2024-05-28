function dropdown() {
  const dropdown = document.querySelector('.dropdown');
  const select = dropdown.querySelector('.dropdown__select');
  const caret = dropdown.querySelector('.dropdown__select-caret');
  const menu = dropdown.querySelector('.dropdown__menu');
  const options = dropdown.querySelectorAll('.dropdown__menu li');
  const selectedText = dropdown.querySelector('.dropdown__select-selected');
  const selectedUp = dropdown.querySelector('.dropdown__select-selected__up');

  // Добавляем обработчик клика на элемент с классом .dropdown__select
  select.addEventListener('click', () => {
    // Переключаем классы, чтобы открыть/закрыть меню
    select.classList.toggle('dropdown__select-clicked');
    caret.classList.toggle('dropdown__select-caret__rotate');
    menu.classList.toggle('dropdown__menu-open');
  });

  // Добавляем обработчик клика на каждый элемент меню
  options.forEach((option) => {
    option.addEventListener('click', () => {
      // Обновляем отображаемый текст в выпадающем списке
      selectedText.innerText = option.innerText;

      // Обновляем стили для элемента с классом .dropdown__select-selected__up
      selectedUp.style.transform = 'translateY(-50%)';
      selectedUp.style.color = 'var(--grayText)';
      selectedUp.style.fontSize = '12px';
      selectedUp.style.lineHeight = '20px';

      // Закрываем выпадающее меню
      select.classList.remove('dropdown__select-clicked');
      caret.classList.remove('dropdown__select-caret__rotate');
      menu.classList.remove('dropdown__menu-open');

      // Убираем класс "active" со всех элементов меню
      options.forEach((option) => {
        option.classList.remove('active');
      });

      // Добавляем класс "active" к выбранному элементу меню
      option.classList.add('active');
    });
  });
}

export default dropdown;
