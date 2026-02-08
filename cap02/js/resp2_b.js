const form = document.querySelector('form')
const resp1 = document.querySelector('h3')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const valorPorUso = Number(form.inValorPorUso.value)
  const tempoDeUso = Number(form.inTempoDeUso.value)

  const minutos = Math.ceil(tempoDeUso / 15)
  const totalAPagar = valorPorUso * minutos

  resp1.innerText = `Valor a Pagar R$: ${totalAPagar.toFixed(2)}`
})