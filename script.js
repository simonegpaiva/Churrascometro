//Carne - 400gr por pessoa + de 6 horas -650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
//Refrigerante/agua - 1000 ml por pessoa + de 6 horas - 1500ml

//Criança valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){

  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
  let qdtTotalCerveja = cervejaPP(duracao) * adultos
  let qdtTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas)

  resultado.innerHTML = `<p>${qdtTotalCarne /1000 }kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja /355)} Latas de cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida / 2000)} garrafas de bebidas</p>`
}

function carnePP(duracao){
  if (duracao >= 6){
    return 650
  }else{
    return 400
  }
}

function cervejaPP(duracao){
   if (duracao >= 6){
    return 2000
  }else{
    return 1200
  }
}

function bebidaPP(duracao){
  if (duracao >= 6){
   return 1500
 }else{
   return 1000
 }
}

