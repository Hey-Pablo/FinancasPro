document.addEventListener("DOMContentLoaded", () => {
  const abas = document.querySelectorAll(".aba");
  const tabs = document.querySelectorAll(".tab");

  window.mostrarAba = function (id) {
    abas.forEach((aba) => aba.classList.remove("ativo"));
    tabs.forEach((tab) => tab.classList.remove("ativo"));

    document.getElementById(id).classList.add("ativo");

    tabs.forEach((tab) => {
      if (tab.dataset.aba === id) {
        tab.classList.add("ativo");
      }
    });
  };

  // Adicionar nova categoria
  function adicionarCategoria(inputSelector, listaSelector) {
    const input = document.querySelector(inputSelector);
    const lista = document.querySelector(listaSelector);
    const nome = input.value.trim();
    if (!nome) return;

    const item = document.createElement("div");
    item.className = "categoria-item";
    item.innerHTML = `
      <span>${nome}</span>
      <button class="editar-btn">Editar</button>
      <button class="remover-btn">Remover</button>
    `;
    lista.appendChild(item);
    input.value = "";

    aplicarEventos(item); // Aplica eventos de editar/remover
  }

  // Botões de adicionar categoria
  document.querySelectorAll(".add-categoria").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tipo = btn.dataset.tipo;
      if (tipo === "despesa") {
        adicionarCategoria("#input-despesa", "#lista-despesas");
      } else {
        adicionarCategoria("#input-receita", "#lista-receitas");
      }
    });
  });

  // Função para aplicar eventos nos itens
  function aplicarEventos(item) {
    const editarBtn = item.querySelector('.editar-btn');
    const removerBtn = item.querySelector('.remover-btn');

    removerBtn.addEventListener("click", () => item.remove());

    editarBtn.addEventListener("click", () => {
      const span = item.querySelector('span');

      if (!span) return; // já está editando

      const textoAtual = span.textContent;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = textoAtual;
      input.classList.add('nova-categoria');
      span.replaceWith(input);

      editarBtn.textContent = 'Salvar';

      editarBtn.onclick = () => {
        const novoTexto = input.value.trim();
        if (novoTexto) {
          const novoSpan = document.createElement('span');
          novoSpan.textContent = novoTexto;
          input.replaceWith(novoSpan);
        }

        editarBtn.textContent = 'Editar';
        aplicarEventos(item); // reaplica eventos
      };
    });
  }

  // Aplicar eventos iniciais nos botões existentes
  document.querySelectorAll(".categoria-item").forEach(aplicarEventos);
});
