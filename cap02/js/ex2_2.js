const form = document.querySelector('form')
const tituloFilme = document.querySelector('h3')
const duracaoFilme = document.querySelector('h4')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const filme = form.inTitulo.value
  const duracao = Number(form.inDuracao.value)
  const minutos = duracao % 60
  const horas = (duracao - minutos) / 60

  tituloFilme.innerText = filme
  duracaoFilme.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
})