# 💼 FinançasPro

**FinançasPro** é uma aplicação de controle financeiro pessoal com interface moderna e intuitiva. Desenvolvida com foco em organização, simplicidade e experiência do usuário, a ferramenta permite gerenciar **despesas, receitas, investimentos, metas, relatórios**, e mais — tudo em um ambiente amigável, com suporte a **tema escuro** e modo desktop via **Electron**.

---

## 📸 Preview

![FinançasPro Screenshot](/frontend/Fotos/preview.png) <!-- Substitua com seu próprio print -->

---

## 🧩 Funcionalidades

- 📊 **Dashboard principal** com atalhos para todas as seções
- 🧾 **Despesas e Receitas** com formulários de cadastro e listagem
- 📈 **Investimentos** com separação por aba e visualização detalhada
- 🎯 **Metas financeiras** personalizadas por categoria
- 👤 **Perfil e Preferências** com edição de dados e preferências financeiras
- 🎨 **Modo Claro e Escuro** com persistência em localStorage
- ⚙️ **Configurações** com gerenciamento de categorias
- 🖥️ **Integração com Electron** para uso como aplicativo desktop `.exe`

- Algumas funções ainda vão ser implementadas em um futuro proximo
---

## 📁 Estrutura de Pastas

```bash
financaspro/
│
├── frontend/              # Interface (HTML, CSS, JS)
│   ├── index.html
│   ├── despesas.html
│   ├── receitas.html
│   ├── investimentos.html
│   ├── metas.html
│   ├── relatorios.html
│   ├── perfil.html
│   ├── configuracoes.html
│   ├── CSS/
│   │   └── style.css
│   └── JS/
│       ├── router.js
│       ├── theme.js
│       ├── despesas.js
│       ├── receitas.js
│       ├── investimentos.js
│       └── ...
│
├── electron/              # Aplicativo Desktop (Electron)
│   ├── main.js
│   └── package.json
│
└── README.md              # Este arquivo



🚀 Como Executar (Electron Desktop App)
1- Clone o repositório:
git clone https://github.com/SEU_USUARIO/FinancasPro.git
cd FinancasPro/electron

2- Instale as dependências:
npm install

3- Rode o aplicativo:
npm start


🛠 Tecnologias 
HTML5 + CSS3 + JavaScript
Font Awesome (ícones)
LocalStorage (persistência do tema)
Electron (aplicativo desktop)

📌 Observações
O foco atual está no tema escuro. O tema claro pode ter pequenos ajustes visuais.
As informações são armazenadas apenas em memória por enquanto. Integração com banco de dados (PostgreSQL, SQLite, etc) pode ser implementada futuramente.
O projeto é totalmente funcional como aplicativo local e pode ser empacotado como .exe com Electron Builder.

📄 Licença
Este projeto está licenciado sob a MIT License.

👨‍💻 Autor
Desenvolvido por Pablo Dilio – github.com/Hey-Pablo
