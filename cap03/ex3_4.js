const prompt = require('prompt-sync')()

const peso = Number(prompt("Peso da Ração (kg): "))
const consumo = Number(prompt("Consumo Diário (gr): "))

const pesoEmGrama = peso * 1000
const duracao = Math.floor(pesoEmGrama / consumo)
const sobra = pesoEmGrama % consumo
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)
