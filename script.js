function calcular() {
  let peso = Number(window.document.querySelector("input#peso").value)
  let altura = Number(window.document.querySelector("input#altura").value)

  let imc = peso / (altura * altura)

  let resnumber = window.document.querySelector("p.valor")
  let restext = window.document.querySelector("p.res")

  resnumber.innerHTML = imc.toFixed(2)

  if (imc <= 18.5) {
    restext.innerHTML = "Cuidado!<br> Você está abaixo do peso!"
  } else if (imc > 18.5 && imc <= 24.99) {
    restext.innerHTML = "Muito bem!<br> Você está no peso ideal!"
  } else if (imc > 25 && imc <= 29.99) {
    restext.innerHTML = "Cuidado!<br> Você está acima do peso!"
  } else if (imc > 30) {
    restext.innerHTML = "Cuidado!<br> Você está muito acima do peso!"
  }

  let aparecer1 = window.document.querySelector("div#resposta")
  aparecer1.style.display = "flex"
  let aparecer2 = window.document.querySelector("div#link")
  aparecer2.style.display = "block"

  if(peso == "" && altura == ""){
    resnumber.innerHTML = "---"
    restext.innerHTML = "Digite os valores antes de calcular!"
  }
}