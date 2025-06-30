document.addEventListener("DOMContentLoaded", () => {
  // ====== Preferências Financeiras ======
  const botao = document.querySelector(".editar-btn");
  const inputs = document.querySelectorAll(".perfil-preferencias input");

  inputs.forEach(input => input.readOnly = true);

  botao.addEventListener("click", () => {
    const emEdicao = botao.textContent === "Editar";

    inputs.forEach(input => input.readOnly = !emEdicao);
    botao.textContent = emEdicao ? "Salvar" : "Editar";

    if (!emEdicao) {
      const dados = Array.from(inputs).map(input => input.value);
      console.log("Valores salvos:", dados);
    }
  });

  // ====== Alterar Foto ======
  const inputFoto = document.getElementById('inputFoto');
  const fotoPreview = document.getElementById('fotoPreview');

  if (inputFoto && fotoPreview) {
    inputFoto.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file && file.type === 'image/png') {
        const reader = new FileReader();
        reader.onload = function (e) {
          fotoPreview.style.backgroundImage = `url('${e.target.result}')`;
          fotoPreview.textContent = '';
        };
        reader.readAsDataURL(file);
      } else {
        alert('Por favor, selecione uma imagem PNG.');
      }
    });
  }
});
