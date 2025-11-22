const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const veiculo = form.inVeiculo.value
  const preco = Number(form.inPreco.value)

  const entrada = preco * 0.5
  const parcela = (preco * 0.5) / 12

  resp1.innerText = `Promocão: ${veiculo}`
  resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
  resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`
})