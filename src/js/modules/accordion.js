function accordion() {
  // Получаем все элементы с классом "accordion"
  const accordion = document.querySelector(".accordion");

  // Получаем заголовок, содержимое и значок аккордеона
  const header = accordion.querySelector("#accordion__header");
  const content = accordion.querySelector("#accordion__content");
  const icon = accordion.querySelector("#accordion__caret");
  
  // Проверяем, что все элементы найдены
  if (header && content && icon) {
    // Добавляем обработчик клика на заголовок
    header.addEventListener("click", () => {
      // Проверяем, открыт ли аккордеон
      const isOpen = content.style.height === `${content.scrollHeight}px`;
  
      // Если аккордеон закрыт, открываем его
      if (!isOpen) {
        accordion.classList.add("activeAccardion");
        content.style.height = `${content.scrollHeight}px`;
        icon.classList.add("dropdown__select-caret__rotate");
      } else {
        // Если аккордеон открыт, закрываем его
        accordion.classList.remove("activeAccardion");
        content.style.height = "0px";
        icon.classList.remove("dropdown__select-caret__rotate");
      }
    });
  }
  
}
export default accordion;
