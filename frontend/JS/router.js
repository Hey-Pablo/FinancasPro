document.addEventListener("DOMContentLoaded", () => {
  const menu = `
    <nav class="menu-retro">
      <ul>
        <li><a href="dashboard.html"><span>📊</span> Dashboard</a></li>
        <li><a href="importar.html"><span>📤</span> Importar Extratos</a></li>
        <li><a href="despesas.html"><span>⏱️</span> Despesas</a></li>
        <li><a href="receitas.html"><span>💰</span> Receitas</a></li>
        <li><a href="investimentos.html"><span>📈</span> Investimentos</a></li>
        <li><a href="metas.html"><span>🎯</span> Metas</a></li>
        <li><a href="relatorios.html"><span>📑</span> Relatórios</a></li>
        <li><a href="configuracoes.html"><span>⚙️</span> Configurações</a></li>
        <li><a href="perfil.html"><span>👤</span> Perfil</a></li>
      </ul>
    </nav>
  `;
  document.getElementById("menu-lateral").innerHTML = menu;
});
