function typography() {
  // Получаем ссылки на необходимые элементы
  const tabs = document.querySelectorAll('.typography__tab button');
  const panels = document.querySelectorAll('.typography__content');

  // Добавляем обработчик клика на каждую кнопку-таб
  tabs.forEach((tab) => {
    tab.addEventListener('click', handleTabClick);
  });

  // Функция, обрабатывающая клик на вкладку
  function handleTabClick(event) {
    // Получаем значение атрибута 'key' у кликнутой кнопки
    const targetKey = event.target.getAttribute('key');

    // Удаляем активные классы у всех вкладок
    tabs.forEach((tab) => {
      tab.classList.remove('tablinks--activeMob', 'tablinks--activeDesc', 'tablinks--activeBtn');
    });

    // Добавляем активные классы к текущей вкладке
    event.target.classList.add('tablinks--activeBtn');
    if (targetKey === '1') {
      event.target.classList.add('tablinks--activeDesc');
    } else {
      event.target.classList.add('tablinks--activeMob');
    }

    // Показываем/скрываем соответствующие панели
    panels.forEach((panel) => {
      const key = panel.getAttribute('key');
      if (key === targetKey) {
        panel.classList.remove('none');
      } else {
        panel.classList.add('none');
      }
    });
  }
}
export default typography;
