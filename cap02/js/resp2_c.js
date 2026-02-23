const form = document.querySelector('form')
const resp1 = document.querySelector('h3')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const produto = form.inProduto.value
  const preco = Number(form.inPreco.value)

  console.log("entrei")

  const metade = preco / 2
  const total = (preco * 2) + metade

  resp1.innerText = `
  ${produto} - Promoção: Leve 3 por ${total.toFixed(2)}  
  O 3° produto custa apenas R$: ${metade.toFixed(2)}
  `
})