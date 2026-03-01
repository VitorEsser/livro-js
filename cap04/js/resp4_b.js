const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const permitida = Number(form.inPermitida.value)
  const condutor = Number(form.inCondutor.value)
  const porcentagem = permitida * 1.2

  const multa = condutor <= permitida ? 'Sem Multa' : condutor <= porcentagem ? 'Multa Leve' : 'Multa Grave'
  resp.innerText = `Situação: ${multa}`
})