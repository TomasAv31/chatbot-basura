const chatBody = document.getElementById('chatBody');
const options = document.getElementById('options');

function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function handleOption(option) {
  addMessage('user', option);
  options.innerHTML = '';

  if (option === '¿A dónde tiro?') {
    addMessage('bot', 'Selecciona el tipo de residuo:');

    const types = ['Plástico', 'Vidrio', 'Orgánico', 'Papel y cartón', 'Electrónicos'];
    types.forEach(type => {
      const btn = document.createElement('button');
      btn.textContent = type;
      btn.onclick = () => handleWasteType(type);
      options.appendChild(btn);
    });

  } else if (option === 'Más información') {
    addMessage('bot', 'Podriamos agregar cosa de donde tirar compost');
    showBackButton();

  } else if (option === 'Puntos verdes') {
    addMessage('bot', 'Podes ver los puntos verdes aca: LINK DEL MAPA CON LOS PUNTOS VERDES');
    showBackButton();
  }
}

function handleWasteType(type) {
  addMessage('user', type);

  let response = '';
  switch (type) {
    case 'Plástico':
      response = 'Los plásticos limpios van con los reciclabes';
      break;
    case 'Vidrio':
      response = 'El vidrio se tira con cuidado con los reciclabes .';
      break;
    case 'Orgánico':
      response = 'Los residuos orgánicos van con el compost.';
      break;
    case 'Papel y cartón':
      response = 'Papel y cartón deben ir con los reciclabes.';
      break;
    case 'Electrónicos':
      response = 'Lleva residuos electrónicos a LUGAR.';
      break;
  }

  addMessage('bot', response);
  showBackButton();
}

function showBackButton() {
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Volver al menú principal';
  backBtn.onclick = showMainMenu;
  options.innerHTML = '';
  options.appendChild(backBtn);
}

function showMainMenu() {
  options.innerHTML = `
    <button onclick="handleOption('¿A dónde tiro?')">¿A dónde tiro?</button>
    <button onclick="handleOption('Más información')">Más información</button>
    <button onclick="handleOption('Puntos verdes')">Puntos verdes</button>
  `;
}
