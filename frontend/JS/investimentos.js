document.addEventListener("DOMContentLoaded", function () {
  // Alternância de abas
  const btnInvestimentos = document.getElementById("btn-aba-investimentos");
  const btnProventos = document.getElementById("btn-aba-proventos");
  const abaInvestimentos = document.getElementById("conteudo-investimentos");
  const abaProventos = document.getElementById("conteudo-proventos");

  btnInvestimentos?.addEventListener("click", () => {
    abaInvestimentos.classList.add("ativo");
    abaProventos.classList.remove("ativo");
    btnInvestimentos.classList.add("ativo");
    btnProventos.classList.remove("ativo");
  });

  btnProventos?.addEventListener("click", () => {
    abaInvestimentos.classList.remove("ativo");
    abaProventos.classList.add("ativo");
    btnInvestimentos.classList.remove("ativo");
    btnProventos.classList.add("ativo");
  });

  // Botões e Modais
  const btnNovoInvestimento = document.getElementById("btn-novo-investimento");
  const btnNovoProvento = document.getElementById("btn-novo-provento");
  const modalInvestimento = document.getElementById("modal-investimento");
  const modalProvento = document.getElementById("modal-provento");
  const fecharInvestimento = document.getElementById("fechar-investimento");
  const fecharProvento = document.getElementById("fechar-provento");

  btnNovoInvestimento?.addEventListener("click", () => modalInvestimento.style.display = "flex");
  btnNovoProvento?.addEventListener("click", () => modalProvento.style.display = "flex");
  fecharInvestimento?.addEventListener("click", () => modalInvestimento.style.display = "none");
  fecharProvento?.addEventListener("click", () => modalProvento.style.display = "none");

  window.addEventListener("click", function (e) {
    if (e.target === modalInvestimento) modalInvestimento.style.display = "none";
    if (e.target === modalProvento) modalProvento.style.display = "none";
  });

  // Submissão com validação
  document.querySelector("#modal-investimento form").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = this.querySelector('input[type="text"]').value.trim();
    const valor = this.querySelector('input[type="number"]').value.trim();
    const data = this.querySelector('input[type="date"]').value;

    if (nome && valor && data) {
      adicionarItem("investimento", nome, valor, data);
      this.reset();
      modalInvestimento.style.display = "none";
    }
  });

  document.querySelector("#modal-provento form").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = this.querySelector('input[type="text"]').value.trim();
    const valor = this.querySelector('input[type="number"]').value.trim();
    const data = this.querySelector('input[type="date"]').value;

    if (nome && valor && data) {
      adicionarItem("provento", nome, valor, data);
      this.reset();
      modalProvento.style.display = "none";
    }
  });

  function adicionarItem(tipo, nome, valor, data) {
    const lista = document.getElementById(`lista-${tipo}s`);
    const mensagemVazia = document.querySelector(`#conteudo-${tipo}s .mensagem-vazia`);
    const contador = document.querySelector(`#titulo-${tipo}s span`);
    mensagemVazia.style.display = "none";

    const card = document.createElement("div");
    card.classList.add("card-item");
    card.innerHTML = `
      <h4>${nome}</h4>
      <p>Valor${tipo === "investimento" ? "" : " Recebido"}: R$ ${parseFloat(valor).toFixed(2)}</p>
      <p>Data: ${new Date(data).toLocaleDateString()}</p>
      <button class="remover">Remover</button>
    `;

    card.querySelector(".remover").addEventListener("click", () => {
      lista.removeChild(card);
      atualizarContador(tipo);
      if (lista.children.length === 0) {
        mensagemVazia.style.display = "block";
      }
    });

    lista.appendChild(card);
    atualizarContador(tipo);
  }

  function atualizarContador(tipo) {
    const lista = document.getElementById(`lista-${tipo}s`);
    const contador = document.querySelector(`#titulo-${tipo}s span`);
    if (contador) {
      contador.textContent = `(${lista.children.length})`;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Alternância de abas
  const btnInvestimentos = document.getElementById("aba-investimentos");
  const btnProventos = document.getElementById("aba-proventos");
  const abaInvestimentos = document.getElementById("conteudo-investimentos");
  const abaProventos = document.getElementById("conteudo-proventos");

  btnInvestimentos?.addEventListener("click", () => {
    abaInvestimentos.classList.add("ativo");
    abaProventos.classList.remove("ativo");
    btnInvestimentos.classList.add("ativo");
    btnProventos.classList.remove("ativo");
  });

  btnProventos?.addEventListener("click", () => {
    abaInvestimentos.classList.remove("ativo");
    abaProventos.classList.add("ativo");
    btnInvestimentos.classList.remove("ativo");
    btnProventos.classList.add("ativo");
  });

  // Botões e Modais
  const btnNovoInvestimento = document.getElementById("btn-novo-investimento");
  const btnNovoProvento = document.getElementById("btn-novo-provento");
  const modalInvestimento = document.getElementById("modal-investimento");
  const modalProvento = document.getElementById("modal-provento");
  const fecharInvestimento = document.getElementById("fechar-investimento");
  const fecharProvento = document.getElementById("fechar-provento");

  btnNovoInvestimento?.addEventListener("click", () => modalInvestimento.style.display = "flex");
  btnNovoProvento?.addEventListener("click", () => modalProvento.style.display = "flex");
  fecharInvestimento?.addEventListener("click", () => modalInvestimento.style.display = "none");
  fecharProvento?.addEventListener("click", () => modalProvento.style.display = "none");

  window.addEventListener("click", function (e) {
    if (e.target === modalInvestimento) modalInvestimento.style.display = "none";
    if (e.target === modalProvento) modalProvento.style.display = "none";
  });

  // Submissão com validação
  document.querySelector("#modal-investimento form").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = this.querySelector('input[type="text"]').value.trim();
    const valor = this.querySelector('input[type="number"]').value.trim();
    const data = this.querySelector('input[type="date"]').value;

    if (nome && valor && data) {
      adicionarItem("investimento", nome, valor, data);
      this.reset();
      modalInvestimento.style.display = "none";
    }
  });

  document.querySelector("#modal-provento form").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = this.querySelector('input[type="text"]').value.trim();
    const valor = this.querySelector('input[type="number"]').value.trim();
    const data = this.querySelector('input[type="date"]').value;

    if (nome && valor && data) {
      adicionarItem("provento", nome, valor, data);
      this.reset();
      modalProvento.style.display = "none";
    }
  });

  function adicionarItem(tipo, nome, valor, data) {
    const lista = document.getElementById(`lista-${tipo}s`);
    const mensagemVazia = lista.closest(".destaque-interno") || lista;
    if (mensagemVazia.classList.contains("mensagem-vazia")) {
      mensagemVazia.style.display = "none";
    }

    const card = document.createElement("div");
    card.classList.add("card-item");
    card.innerHTML = `
      <h4>${nome}</h4>
      <p>Valor${tipo === "investimento" ? "" : " Recebido"}: R$ ${parseFloat(valor).toFixed(2)}</p>
      <p>Data: ${new Date(data).toLocaleDateString()}</p>
      <button class="remover">Remover</button>
    `;

    card.querySelector(".remover").addEventListener("click", () => {
      lista.removeChild(card);
      if (lista.children.length === 0 && mensagemVazia.classList.contains("mensagem-vazia")) {
        mensagemVazia.style.display = "block";
      }
    });

    lista.appendChild(card);
  }
});
