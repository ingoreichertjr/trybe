const body = document.body
const header = document.querySelector('header')
const content = document.getElementById('content')
const bgcField = document.getElementsByClassName('bgcolor-options')
const tcField = document.getElementsByClassName('textcolor-options')
const fsField = document.getElementById('fontsize')
const lhField = document.getElementById('lineheight')
const fontField = document.getElementsByClassName('fontfamily-options')

function backgroundColor(event) {
  const bgcInput = event.target.value
  body.style.backgroundColor = bgcInput
  localStorage.setItem('pageColor', bgcInput)
}

function textColor(event) {
  const tcInput = event.target.value
  body.style.color = tcInput
  localStorage.setItem('textColor', tcInput)
}

function fontSize() {
  const fsInput = fsField.value
  content.style.fontSize = `${fsInput}px`
  localStorage.setItem('fontSize', `${fsInput}px`)
}

function lineHeight() {
  const lhInput = lhField.value
  content.style.lineHeight = `${lhInput}em`
  localStorage.setItem('lineHeight', `${lhInput}em`)
}

function fontFamily(event) {
  const fontInput = event.target.value
  body.style.fontFamily = fontInput
  localStorage.setItem('fontFamily', fontInput)
}

for (const i of bgcField) {
  i.addEventListener('click', backgroundColor)
}

for (const i of tcField) {
  i.addEventListener('click', textColor)
}

fsField.addEventListener('click', fontSize);

lhField.addEventListener('click', lineHeight);

for (const i of fontField) {
  i.addEventListener('click', fontFamily)
}

body.style.backgroundColor = localStorage.pageColor
body.style.color = localStorage.textColor
content.style.fontSize = localStorage.fontSize
content.style.lineHeight = localStorage.lineHeight
body.style.fontFamily = localStorage.fontFamily