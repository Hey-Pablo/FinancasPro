document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formDespesas");
  const listaDespesas = document.getElementById("listaDespesas");
  const totalSpan = document.getElementById("total-despesas");
  const categoriaSelect = document.getElementById("categoria");

  const modal = document.getElementById("modalCategorias");
  const abrirModalBtn = document.getElementById("gerenciarCategoriasBtn");
  const fecharModalBtn = document.getElementById("fecharModalBtn");
  const novaCategoriaInput = document.getElementById("novaCategoriaInput");
  const adicionarCategoriaBtn = document.getElementById("adicionarCategoriaBtn");
  const categoriasExistentes = document.getElementById("categoriasExistentes");

  let despesas = JSON.parse(localStorage.getItem("despesas")) || [];
  let categorias = JSON.parse(localStorage.getItem("categoriasDespesas")) || [];

  // Inicializar categorias e despesas
  atualizarCategorias();
  atualizarLista();

  // Abrir modal
  abrirModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Fechar modal
  fecharModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Adicionar nova categoria
  adicionarCategoriaBtn.addEventListener("click", () => {
    const nome = novaCategoriaInput.value.trim();
    if (nome && !categorias.includes(nome)) {
      categorias.push(nome);
      localStorage.setItem("categoriasDespesas", JSON.stringify(categorias));
      novaCategoriaInput.value = "";
      atualizarCategorias();
    }
  });

  // Atualizar select e modal de categorias
  function atualizarCategorias() {
    categoriaSelect.innerHTML = `<option value="">Selecione uma categoria</option>`;
    categorias.forEach(cat => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      categoriaSelect.appendChild(option);
    });

    categoriasExistentes.innerHTML = "";
    categorias.forEach(cat => {
      const div = document.createElement("div");
      div.className = "categoria-item";
      div.innerHTML = `
        <span>${cat}</span>
        <button class="remover" data-cat="${cat}" title="Excluir">❌</button>
      `;
      categoriasExistentes.appendChild(div);
    });
  }

  // Remover categoria
  categoriasExistentes.addEventListener("click", (e) => {
    if (e.target.classList.contains("remover")) {
      const nome = e.target.dataset.cat;
      categorias = categorias.filter(c => c !== nome);
      localStorage.setItem("categoriasDespesas", JSON.stringify(categorias));
      atualizarCategorias();
    }
  });

  // Submeter nova despesa
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const novaDespesa = {
      id: crypto.randomUUID(),
      descricao: form.descricao.value.trim(),
      valor: parseFloat(form.valor.value),
      categoria: form.categoria.value,
      data: form.data.value,
    };

    if (!novaDespesa.descricao || isNaN(novaDespesa.valor) || !novaDespesa.categoria || !novaDespesa.data) {
      return;
    }

    despesas.push(novaDespesa);
    localStorage.setItem("despesas", JSON.stringify(despesas));
    form.reset();
    atualizarLista();
  });

  // Atualizar a listagem
  function atualizarLista() {
    listaDespesas.innerHTML = "";
    if (despesas.length === 0) {
      listaDespesas.classList.add("lista-vazia");
      listaDespesas.textContent = "Nenhuma transação encontrada";
      totalSpan.textContent = "0";
      return;
    }

    listaDespesas.classList.remove("lista-vazia");
    despesas.forEach(item => {
      const div = document.createElement("div");
      div.className = "item-lista";
      div.innerHTML = `
        <strong>${item.descricao}</strong> - R$ ${item.valor.toFixed(2)}<br>
        ${item.categoria} - ${item.data}
      `;
      listaDespesas.appendChild(div);
    });

    totalSpan.textContent = despesas.length;
  }
});
