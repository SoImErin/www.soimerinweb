document.addEventListener('DOMContentLoaded', () => {
  const contentRoot = document.querySelector('.body__container');

  function checkScrollTop() {
    const atTop = window.scrollY === 0;

    if (atTop) {
      contentRoot?.classList.add('scroll-at-top');
    } else {
      contentRoot?.classList.remove('scroll-at-top');
    }
  }

  // Check on load
  checkScrollTop();

  // Add scroll listener
  window.addEventListener('scroll', checkScrollTop);
});
