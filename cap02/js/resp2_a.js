const form = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const medicamento = form.inMedicamento.value
  const preco = Number(form.inPreco.value)

  const promocao = Math.floor(preco * 2)

  resp1.innerText = `Promocão de ${medicamento}`
  resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`
})