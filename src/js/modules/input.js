function inputError() {
  const inputField = document.querySelector('.ui__input');

  // Добавляем обработчик события 'input' на поле ввода
  inputField.addEventListener('input', () => {
    // Проверяем, есть ли значение в поле ввода
    if (inputField.value) {
      // Если есть, добавляем класс 'has-content'
      inputField.classList.add('has-content');
    } else {
      // Если нет, удаляем класс 'has-content'
      inputField.classList.remove('has-content');
    }
  });
}

export default inputError;
