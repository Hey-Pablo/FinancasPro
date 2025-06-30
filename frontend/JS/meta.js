document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formMeta");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = document.getElementById("tituloMeta").value.trim();
    const valorTotal = parseFloat(document.getElementById("valorTotal").value);
    const valorInicial = parseFloat(document.getElementById("valorInicial").value);
    const dataLimite = document.getElementById("dataLimite").value;
    const categoria = document.getElementById("categoriaMeta").value;
    const descricao = document.getElementById("descricaoMeta").value.trim();

    if (!titulo || isNaN(valorTotal) || isNaN(valorInicial)) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    console.log("Meta criada:", {
      titulo,
      valorTotal,
      valorInicial,
      dataLimite,
      categoria,
      descricao
    });

    alert("Meta criada com sucesso!");
    form.reset();
  });
});
