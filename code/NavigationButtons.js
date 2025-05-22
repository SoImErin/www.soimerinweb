document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.content-section');

  // Load last visited section from localStorage
  const savedTarget = localStorage.getItem('activeSection');
  const targetSelector = savedTarget || '.home__content';
  const targetSection = document.querySelector(targetSelector);
  const targetButton = document.querySelector(`.nav-btn[data-target="${targetSelector}"]`);

  // Hide all sections first
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  // Show the saved or default section
  if (targetSection) {
    targetSection.classList.add('active');
    targetSection.style.display = 'block';
  }

  // Highlight the corresponding button
  buttons.forEach(btn => btn.classList.remove('active-btn'));
  if (targetButton) {
    targetButton.classList.add('active-btn');
  }

  // Event listeners for nav buttons
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const newTarget = button.getAttribute('data-target');
      const newSection = document.querySelector(newTarget);

      if (!newSection) return;

      // Hide all sections
      sections.forEach(section => {
        section.classList.remove('active');
        setTimeout(() => {
          section.style.display = 'none';
        }, 300);
      });

      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active-btn'));

      // Show and activate new target section
      setTimeout(() => {
        newSection.style.display = 'block';
        requestAnimationFrame(() => {
          newSection.classList.add('active');
        });

        // Highlight the clicked button
        button.classList.add('active-btn');

        // Save current section to localStorage
        localStorage.setItem('activeSection', newTarget);
      }, 300);
    });
  });
});
