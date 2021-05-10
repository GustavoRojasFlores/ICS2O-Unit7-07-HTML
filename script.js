document.getElementById('btn').addEventListener('click', calculate)
const text = document.getElementById('output')

function calculate () {
  const base = parseInt(document.getElementById('a').value)
  const multiplier = parseInt(document.getElementById('b').value)
  if (base * 0 === 0 && multiplier * 0 === 0 && base / Math.abs(base) === 1 && multiplier / Math.abs(multiplier) === 1) {
    let output = 0
    for (let counter = 0; counter < multiplier; counter++) {
      output += base
    }
    text.innerHTML = 'Result: ' + output
  } else {
    text.innerHTML = 'Please enter a valid positive number in both inputs.'
  }
}
