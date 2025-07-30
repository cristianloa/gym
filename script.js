document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Cargar preferencia guardada
  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark-mode');
    themeToggleBtn.textContent = '🌙';
  } else {
    themeToggleBtn.textContent = '☀️';
  }

  // Alternar tema al hacer clic
  themeToggleBtn.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
    if (html.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    }
  });
});
