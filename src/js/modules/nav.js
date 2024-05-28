function nav () {
    const navLinks = document.querySelectorAll('.nav-section__item a');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    // Функция для обновления активного элемента навигации
    function updateActiveNavLink() {
      let currentSection = null;
      let currentSectionTop = 0;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          currentSection = section;
          currentSectionTop = sectionTop;
        }
      });

      if (currentSection) {
        const currentId = currentSection.getAttribute('id');
        navLinks.forEach(navLink => {
          const targetId = navLink.getAttribute('href');
          if (targetId === `#${currentId}`) {
            navLink.classList.add('active-nav');
          } else {
            navLink.classList.remove('active-nav');
          }
        });
      }
    }

    // Обновление активного элемента навигации при прокрутке
    window.addEventListener('scroll', updateActiveNavLink);



}
export default nav;