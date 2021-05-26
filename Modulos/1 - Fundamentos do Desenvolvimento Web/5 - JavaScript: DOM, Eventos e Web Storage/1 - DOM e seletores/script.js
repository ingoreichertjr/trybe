document.getElementById('header-container').style.backgroundColor = 'green';

const purple = document.querySelectorAll('.emergency-tasks div h3');
for (i of purple) {
  i.style.backgroundColor = 'purple';
}

const pink = document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';

const black = document.querySelectorAll('.no-emergency-tasks div h3');
for (i of black) {
  i.style.backgroundColor = 'black';
}

const yellow = document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';

document.getElementById('footer-container').style.backgroundColor = '#2c4d37'