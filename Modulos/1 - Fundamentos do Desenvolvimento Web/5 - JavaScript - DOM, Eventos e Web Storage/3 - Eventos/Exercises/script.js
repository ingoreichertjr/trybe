function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// 1

function insertDays(array) {
  for (let i of array) {
    let dia = document.createElement('li');
    dia.classList.add('day');
    dia.innerHTML = i
    document.getElementById('days').appendChild(dia)
  
    if (i === 24 | i === 25 | i === 31) {dia.classList.add('holiday')}
    if (i === 4 | i === 11 | i === 18 | i === 25) {dia.classList.add('friday')}
  }
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

insertDays(dezDaysList);

// 2

function createButtonHoliday(string) {
  let button = document.createElement('button');
  button.innerHTML = string
  button.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(button)
}

createButtonHoliday('Feriado');

// 3

let buttonHoliday = document.getElementById('btn-holiday');
buttonHoliday.addEventListener('click', holidayColor)

function holidayColor() {
  let holidays = document.getElementsByClassName('holiday')
  for (let i of holidays) {
    let currentBG = i.style.backgroundColor
    if (currentBG === 'black') {
      i.style.backgroundColor = 'rgb(238,238,238)'
    } else {i.style.backgroundColor = 'black'}
  }
}

// 4

function createButtonFriday(string) {
  let button = document.createElement('button');
  button.innerHTML = string
  button.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(button)
}

createButtonFriday('Sexta-feira');

// 5 *

let buttonFriday = document.getElementById('btn-friday');
buttonFriday.addEventListener('click', fridayColor)
let dezFridays = [4, 11, 18, 25]

function fridayColor() {
  let fridays = document.getElementsByClassName('friday')
  for (let i = 0; i < fridays.length; i += 1) {
    let text = i.innerHTML
    if (fridays[i].innerHTML !== 'SEXTOU!!!') {
      fridays[i].innerHTML = 'SEXTOU!!!'
    } else {fridays[i].innerHTML = dezFridays[i]}
  }
}

// 6

let day = document.getElementsByClassName('day')

for (let i of day) {
  i.addEventListener('mouseenter', function (event) {
    event.target.style.fontSize = '40px'
  });
  i.addEventListener('mouseleave', function (event) {
    event.target.style.fontSize = '20px'
  })
}

// 7

function addTask(string) {
  let task = document.createElement('span')
  task.innerHTML = string
  document.querySelector('.my-tasks').appendChild(task)
}

addTask('cozinhar')

// 8

function taskLabel(cor) {
  let label = document.createElement('div')
  label.classList.add('task')
  label.style.backgroundColor = cor
  document.querySelector('.my-tasks').appendChild(label)
}

taskLabel('red')

// 9

let tasks = document.getElementsByClassName('task')

for (let task of tasks) {
  task.addEventListener('click', function (event) {
    if (event.target.classList.length > 1) {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected')
    }
  })
}

// 10

//day ja foi declarado na linha 89.

for (let i of day) {
  i.addEventListener('click', function (event) {
    let selectedBgC = document.querySelector('.selected').style.backgroundColor
    let currentDayBg = event.target.style.backgroundColor
    if (currentDayBg !== selectedBgC) {
      event.target.style.backgroundColor = selectedBgC
    } else {
      event.target.style.backgroundColor = 'rgb(238,238,238)'
    }
  })
}


// Bonus

let addButton = document.getElementById('btn-add')
let inputField = document.getElementById('task-input')

addButton.addEventListener('click', function () {
  let input = document.getElementById('task-input').value
  if (input.length === 0) {
    alert('Campo em branco')
  } else {
    let listItem = document.createElement('li')
    listItem.innerHTML = input
    document.querySelector('.task-list').appendChild(listItem)
  }
})

inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    let input = document.getElementById('task-input').value
    if (input.length === 0) {
      alert('Campo em branco')
    } else {
      let listItem = document.createElement('li')
      listItem.innerHTML = input
      document.querySelector('.task-list').appendChild(listItem)
    }
  }
})