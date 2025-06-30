// theme.js
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('toggleThemeBtn');
  const themeIcon = document.getElementById('themeIcon');
  const root = document.documentElement;

  function aplicarTema() {
    const tema = localStorage.getItem('tema') || 'dark';
    root.setAttribute('data-theme', tema);
    atualizarIcone(tema);
  }

  function atualizarIcone(tema) {
    const icon = document.getElementById('themeIcon'); // reobtem para garantir que existe
    if (icon) {
      icon.className = 'fa-solid ' + (tema === 'dark' ? 'fa-sun' : 'fa-moon');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const temaAtual = root.getAttribute('data-theme') || 'dark';
      const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', novoTema);
      localStorage.setItem('tema', novoTema);
      atualizarIcone(novoTema);
    });
  }

  aplicarTema();
});
