const nome = document.getElementById('input-name')
const email = document.getElementById('input-email')
const cpf = document.getElementById('input-cpf')
const address = document.getElementById('input-address')
const city = document.getElementById('input-city')
const state = document.getElementById('input-state');
const homeType = document.querySelector('input[name="type"]:checked')
const resume = document.getElementById('curriculo')
const role = document.getElementById('role')
const roleDescript = document.getElementById('role-description')
const dateInput = document.getElementById('start-date')
const submit = document.getElementById('submit')
const dadosForm = document.getElementById('dados-form')
let formulario = {}
const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

function stateOptions() {
  for (let i = 0; i < states.length; i += 1) {
    const option = document.createElement('option');
    option.classList.add('state');
    option.innerHTML = states[i];
    state.appendChild(option)
  }
}

function checkForm(event) {
  event.preventDefault()

  // CHECK DATE
  const date = dateInput.value
  if (date.length === 0) {
    return alert('Preencher Data')
  }
  const regex = /^\d\d\/\d\d\/\d\d\d\d$/
  if (!regex.test(date)) {
    return alert ('Data: Formato inválido')
  }
  const dateSplit = date.split('/')
  if (dateSplit[0] <= 0 || dateSplit[0] > 31) {
    return alert('Data: Dia inválido')
  }
  if (dateSplit[1] <= 0 || dateSplit[1] > 12) {
    return alert('Data: Mes inválido')
  }
  if (dateSplit[2] <= 0) {
    return alert('Data: Ano inválido')
  }

  // 
  formulario = `Nome: ${nome.value}<br>Email: ${email.value}<br>CPF: ${cpf.value}<br>Endereço: ${address.value}<br>Cidade: ${city.value}<br>Estado: ${state.value}<br>Tipo de domicilio: ${homeType.value}<br>Resumo do curriculo: ${resume.value}<br>Cargo: ${role.value}<br>Descrição do cargo: ${roleDescript.value}<br>Data de início: ${dateInput.value}`

  dadosForm.innerHTML = formulario
}



stateOptions()
submit.addEventListener('click', checkForm)