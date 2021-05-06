let day = 0
let age = 0

document.getElementById('button').addEventListener('click', eligibleCheck)

function eligibleCheck () {
  day = document.getElementById('input1').value
  age = document.getElementById('input2').value

  age = parseInt(age)

  if ((day === 'Tuesday' || day === 'Thursday') || age > 12 && age < 21) {
    document.getElementById('answer').innerHTML = 'You are eligible for student pricing!'
  } else {
    document.getElementById('answer').innerHTML = 'You must pay regular price.'
  }
}
