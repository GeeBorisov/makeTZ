function validEmail() {
  // Получаем ссылки на необходимые элементы
  const emailInput = document.getElementById('email');
  const emailLabel = document.querySelector('.ui__label[for="email"]');
  const errorMessage = document.querySelector('.ui__error-message');

  // Добавляем обработчик события 'input' на поле ввода email
  emailInput.addEventListener('input', validateEmail);

  // Функция, которая проверяет корректность введенного email
  function validateEmail() {
    // Получаем значение поля ввода email, удаляя пробелы
    const emailValue = emailInput.value.trim();

    // Определяем регулярное выражение для проверки email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Если email корректен
    if (emailRegex.test(emailValue)) {
      // Устанавливаем стили для успешного ввода
      emailInput.style.borderBottom = '4px solid #3E29E3';
      emailLabel.style.color = '#7D7D7D';
      errorMessage.style.display = 'none';
    }
    // Если email некорректен
    else {
      // Устанавливаем стили для некорректного ввода
      emailInput.style.borderBottom = '4px solid #E80F3B';
      emailLabel.style.color = '#E80F3B';
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Пожалуйста, введите правильный email.';
    }
  }
}

export default validEmail;
