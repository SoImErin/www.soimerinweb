document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.content-section');

  // Show default (home)
  const defaultSection = document.querySelector('.home__content');
  const defaultButton = document.querySelector('.nav-btn[data-target=".home__content"]');

  if (defaultSection) {
    defaultSection.classList.add('active');
    defaultSection.style.display = 'block';
  }

  if (defaultButton) {
    defaultButton.classList.add('active-btn');
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetSelector = button.getAttribute('data-target');
      const targetSection = document.querySelector(targetSelector);

      if (!targetSection) return;

      // Hide all sections
      sections.forEach(section => {
        section.classList.remove('active');
        setTimeout(() => {
          section.style.display = 'none';
        }, 300);
      });

      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active-btn'));

      // Show and activate target section
      setTimeout(() => {
        targetSection.style.display = 'block';
        requestAnimationFrame(() => {
          targetSection.classList.add('active');
        });

        // Highlight the clicked button
        button.classList.add('active-btn');
      }, 300);
    });
  });
});
