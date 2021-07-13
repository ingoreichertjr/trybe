const form = document.getElementById('form')
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
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];


new JustValidate('#form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    resume: {
      required: true,
      maxLength: 1000
    },
    role: {
      required: true,
      maxLength: 40
    },
    roleD: {
      required: true,
      maxLength: 500
    },
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.'
    },
    address: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    city: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    state: {
      required: 'O campo estado é obrigatório.',
    },
    radio: {
      required: 'A escolha de um item é obrigatória.',
    },
    text: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    position: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    description: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    date: {
      required: 'Este campo é obrigatório.',
    }
  },
});


function stateOptions() {
  for (let i = 0; i < states.length; i += 1) {
    const option = document.createElement('option');
    option.classList.add('state');
    option.innerHTML = states[i];
    state.appendChild(option)
  }
}

// function checkForm(event) {
//   event.preventDefault()

// // Checks
//   let result = []
//   dadosForm.innerHTML = null
//   if (nome.value.length > 40 || nome.value.length === 0) {
//     result.push('Nome inválido')
//   }
//   if (email.value.length > 50 || email.value.length === 0) {
//     result.push('Email inválido')
//   }
//   if (cpf.value.length > 11 || cpf.value.length === 0) {
//     result.push('CPF inválido')
//   }
//   if (address.value.length > 200 || address.value.length === 0) {
//     result.push('Endereço inválido')
//   }
//   if (city.value.length > 28 || city.value.length === 0) {
//     result.push('Cidade inválida')
//   }
//   if (resume.value.length > 40 || resume.value.length === 0) {
//     result.push('Resumo inválido')
//   }
//   if (role.value.length > 40 || role.value.length === 0) {
//     result.push('Cargo inválido')
//   }
//   if (roleDescript.value.length > 40 || roleDescript.value.length === 0) {
//     result.push('Descrição do cargo inválida')
//   }
//   if (dateInput.value.length !== 10) {
//     result.push('Data inválida')
//   }

//   if (result.length > 0) {
//     for (const i of result) {
//       dadosForm.innerHTML += `${i}<br>`
//     }
//   } else {
//     result = `Nome: ${nome.value}<br>Email: ${email.value}<br>CPF: ${cpf.value}<br>Endereço: ${address.value}<br>Cidade: ${city.value}<br>Estado: ${state.value}<br>Tipo de domicilio: ${homeType.value}<br>Resumo do curriculo: ${resume.value}<br>Cargo: ${role.value}<br>Descrição do cargo: ${roleDescript.value}<br>Data de início: ${dateInput.value}`

//     dadosForm.innerHTML = result
//   }
// }

function clearDiv() {
  dadosForm.innerHTML = null
}

stateOptions()
// submit.addEventListener('click', checkForm)
clear.addEventListener('click', clearDiv)