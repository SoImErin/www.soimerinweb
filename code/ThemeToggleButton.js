// Get saved theme from localStorage
const savedTheme = localStorage.getItem('theme');

// If saved theme is 'light', remove dark mode class
// Otherwise, default to dark mode (add 'dark' class)
if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });
});
