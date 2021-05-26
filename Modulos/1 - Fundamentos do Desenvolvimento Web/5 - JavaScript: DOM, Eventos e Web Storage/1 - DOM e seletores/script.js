document.getElementById('header-container').style.backgroundColor = 'green';

// const purple = document.querySelectorAll('.emergency-tasks div h3');
// for (i of purple) {
//   i.style.backgroundColor = 'purple';
// }

for (i of document.querySelectorAll('.emergency-tasks div h3')) {
  i.style.backgroundColor = 'purple';
}

document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';

for (i of document.querySelectorAll('.no-emergency-tasks div h3')) {
  i.style.backgroundColor = 'black';
}

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';

document.getElementById('footer-container').style.backgroundColor = '#2c4d37'