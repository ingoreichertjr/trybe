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
const clear = document.getElementById('clear')
const dadosForm = document.getElementById('dados-form')
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

  // Checks
  let result = []
  dadosForm.innerHTML = null
  if (nome.value.length > 40 || nome.value.length === 0) {
    result.push('Nome inválido')
  }
  if (email.value.length > 50 || email.value.length === 0) {
    result.push('Email inválido')
  }
  if (cpf.value.length > 11 || cpf.value.length === 0) {
    result.push('CPF inválido')
  }
  if (address.value.length > 200 || address.value.length === 0) {
    result.push('Endereço inválido')
  }
  if (city.value.length > 28 || city.value.length === 0) {
    result.push('Cidade inválida')
  }
  if (resume.value.length > 40 || resume.value.length === 0) {
    result.push('Resumo inválido')
  }
  if (role.value.length > 40 || role.value.length === 0) {
    result.push('Cargo inválido')
  }
  if (roleDescript.value.length > 40 || roleDescript.value.length === 0) {
    result.push('Descrição do cargo inválida')
  }

  if (result.length > 0) {
    for (const i of result) {
      dadosForm.innerHTML += `${i}<br>`
    }
  } else {
    result = `Nome: ${nome.value}<br>Email: ${email.value}<br>CPF: ${cpf.value}<br>Endereço: ${address.value}<br>Cidade: ${city.value}<br>Estado: ${state.value}<br>Tipo de domicilio: ${homeType.value}<br>Resumo do curriculo: ${resume.value}<br>Cargo: ${role.value}<br>Descrição do cargo: ${roleDescript.value}<br>Data de início: ${dateInput.value}`

    dadosForm.innerHTML = result
  }
}

function clearDiv() {
  dadosForm.innerHTML = null
}

stateOptions()
submit.addEventListener('click', checkForm)
clear.addEventListener('click', clearDiv)