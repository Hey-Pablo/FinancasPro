document.addEventListener("DOMContentLoaded", () => {
  const categoriasKey = "categoriasReceita";
  const receitasKey = "receitasRegistradas";

  const categoriaSelect = document.getElementById("categoria");
  const categoriasExistentes = document.getElementById("categoriasExistentes");
  const novaCategoriaInput = document.getElementById("novaCategoriaInput");
  const listaReceitas = document.getElementById("listaReceitas");

  function carregarCategorias() {
    const categorias = JSON.parse(localStorage.getItem(categoriasKey)) || [];
    categoriaSelect.innerHTML = "<option value=''>Selecione uma categoria</option>";
    categorias.forEach(cat => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      categoriaSelect.appendChild(option);
    });

    categoriasExistentes.innerHTML = "";
    categorias.forEach(cat => {
      const span = document.createElement("div");
      span.className = "categoria-item";
      span.innerHTML = `${cat} <button class="excluir-btn" title="Excluir">❌</button>`;
      span.querySelector("button").onclick = () => excluirCategoria(cat);
      categoriasExistentes.appendChild(span);
    });
  }

  function salvarCategoria(nome) {
    if (!nome.trim()) return;
    const categorias = JSON.parse(localStorage.getItem(categoriasKey)) || [];
    if (!categorias.includes(nome)) {
      categorias.push(nome);
      localStorage.setItem(categoriasKey, JSON.stringify(categorias));
      carregarCategorias();
    }
  }

  function excluirCategoria(nome) {
    let categorias = JSON.parse(localStorage.getItem(categoriasKey)) || [];
    categorias = categorias.filter(c => c !== nome);
    localStorage.setItem(categoriasKey, JSON.stringify(categorias));
    carregarCategorias();
  }

  document.getElementById("gerenciarCategoriasBtn").onclick = () => {
    document.getElementById("modalCategorias").classList.remove("hidden");
  };

  document.getElementById("fecharModalBtn").onclick = () => {
    document.getElementById("modalCategorias").classList.add("hidden");
  };

  document.getElementById("adicionarCategoriaBtn").onclick = () => {
    salvarCategoria(novaCategoriaInput.value);
    novaCategoriaInput.value = "";
  };

  document.getElementById("formReceita").addEventListener("submit", (e) => {
    e.preventDefault();
    const descricao = document.getElementById("descricao").value.trim();
    const valor = parseFloat(document.getElementById("valor").value);
    const categoria = categoriaSelect.value;
    const data = document.getElementById("data").value;
    const recorrente = document.getElementById("recorrente").checked;

    if (!descricao || isNaN(valor) || !categoria || !data) return;

    const nova = { descricao, valor, categoria, data, recorrente };
    const receitas = JSON.parse(localStorage.getItem(receitasKey)) || [];
    receitas.push(nova);
    localStorage.setItem(receitasKey, JSON.stringify(receitas));
    exibirReceitas();
    e.target.reset();
  });

  function exibirReceitas() {
    const receitas = JSON.parse(localStorage.getItem(receitasKey)) || [];
    const titulo = document.querySelector(".lista-card h2");
    titulo.textContent = `Receitas Registradas (${receitas.length})`;

    if (receitas.length === 0) {
      listaReceitas.innerHTML = "Nenhuma transação encontrada";
      return;
    }

    listaReceitas.innerHTML = "";
    receitas.forEach((r) => {
      const item = document.createElement("div");
      item.className = "receita-item";
      item.innerHTML = `
        <strong>${r.descricao}</strong> - R$ ${r.valor.toFixed(2)}<br>
        ${r.categoria} - ${r.data} ${r.recorrente ? "(Recorrente)" : ""}
      `;
      listaReceitas.appendChild(item);
    });
  }

  carregarCategorias();
  exibirReceitas();
});
