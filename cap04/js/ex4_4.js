const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const horaBrasil = Number(form.inHoraBrasil.value)
  let horaFrança = horaBrasil + 5
  if (horaFrança > 23.59) horaFrança = horaFrança % 24

  resp.innerText = `Hora na França ${horaFrança.toFixed(2)}`
})