const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const numero = Number(form.inNumero.value)
  const parOuImpar = numero % 2 === 0 ? 'par' : 'ímpar'

  resp.innerText = `${numero} é ${parOuImpar}`
})