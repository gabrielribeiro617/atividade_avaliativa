const produtosBtn = document.querySelector('nav a:nth-child(1)');
const combosBtn = document.querySelector('nav a:nth-child(2)');
const container = document.getElementById('container');

const produtosTable = `
  <table>
    <caption>Produtos Disponíveis</caption>
    <thead>
      <tr><th>Produto</th><th>Preço</th></tr>
    </thead>
    <tbody>
      <tr><td>Pipoca P Salgada</td><td>R$ 10,00</td></tr>
      <tr><td>Pipoca M Salgada</td><td>R$ 15,00</td></tr>
      <tr><td>Pipoca G Salgada</td><td>R$ 20,00</td></tr>
      <tr><td>Água com e sem gás 500ml</td><td>R$ 8,00</td></tr>
      <tr><td>Refrigerante</td><td>R$ 10,00</td></tr>
      <tr><td>Pão de Queijo</td><td>R$ 18,00</td></tr>
      <tr><td>Pipoca P Doce</td><td>R$ 12,00</td></tr>
      <tr><td>Pipoca M Doce</td><td>R$ 17,00</td></tr>
      <tr><td>Pipoca G Doce</td><td>R$ 22,00</td></tr>
      <tr><td>Mini Churros</td><td>R$ 30,00</td></tr>
    </tbody>
  </table>
`;

const combosTable = `
  <div>
    <h3>Combos Disponíveis</h3>
    <p>Confira os combos disponíveis pessoalmente no nosso cinema. Abaixo seguem algumas sugestões:<hr></p>
    <ul>
      <li>Combo Pipocas: 2 Pipoca P Salgada e 1 Pipoca M Doce</li>
      <li>Combo para Dividir: 4 Pipocas M Salgada, 4 Pipocas Doce M e 4 Refrigerantes</li>
      <li>Combo de Doces: 1 Pipoca M Doce e 1 Mini Churros</li>
    </ul>
  </div>
`;

let activeContent = null;

function toggleContent(content, button) {
  if (activeContent === content) {
    container.innerHTML = '';
    activeContent = null;
    button.blur(); 
  } else {
    container.innerHTML = content;
    activeContent = content;
    button.focus(); 
  }
}

produtosBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleContent(produtosTable, produtosBtn);
});

combosBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleContent(combosTable, combosBtn);
});
